import {Router} from 'express';
import {body} from 'express-validator';

import {Post, Topic} from '~~/db/sequelize/models';
import {validatorResultMiddleware} from '~~/utils';
import {getUserFields} from '~~/utils/auth';
import {HTTP_CODE} from '~~/utils/httpCodes';

export const router = Router();

router.get('/topics', async (_req, res, next) => {
    try {
        const topics = await Topic.scope('user').findAll();
        if (topics) {
            res.json(topics);
        } else {
            res.sendStatus(HTTP_CODE.NO_CONTENT);
        }
    } catch (e) {
        next(e);
    }
});

router.get('/topics/:id', async (req, res, next) => {
    try {
        const topic = await Topic.findByPk(req.params.id);
        if (topic) {
            res.json(topic);
        } else {
            res.sendStatus(HTTP_CODE.NOT_FOUND);
        }
    } catch (e) {
        next(e);
    }
});

router.post(
    '/topics',
    body('header').exists().notEmpty().trim().escape().isLength({min: 3, max: 255}),
    body('text').exists().notEmpty().trim().escape(),
    validatorResultMiddleware,
    async (req, res, next) => {
        try {
            const topic = await Topic.create({
                userId: getUserFields().id,
                header: req.body.header,
                text: req.body.text
            });
            res.status(HTTP_CODE.CREATED).json(topic);
        } catch (e) {
            next(e);
        }
    }
);

router.delete('/topics/:id', async (req, res, next) => {
    try {
        const count = await Topic.destroy({where: {id: req.params.id}});
        if (count) {
            res.sendStatus(HTTP_CODE.OK);
        } else {
            res.sendStatus(HTTP_CODE.NOT_FOUND);
        }
    } catch (e) {
        next(e);
    }
});

router.get('/topics/:topicId/posts', async (req, res, next) => {
    try {
        const posts = await Post.scope('user').findAll({where: {topicId: req.params.topicId}});
        if (posts) {
            res.json(posts);
        } else {
            res.sendStatus(HTTP_CODE.NO_CONTENT);
        }
    } catch (e) {
        next(e);
    }
});

router.get('/topics/:topicId/posts/:id', async (req, res, next) => {
    try {
        const post = await Post.findByPk(req.params.id);
        if (post && post.topicId === +req.params.topicId) {
            res.json(post);
        } else {
            res.sendStatus(HTTP_CODE.NOT_FOUND);
        }
    } catch (e) {
        next(e);
    }
});

router.post(
    '/topics/:topicId/posts',
    body('replyId').optional().isNumeric(),
    body('text').exists().notEmpty().trim().escape(),
    validatorResultMiddleware,
    async (req, res, next) => {
        try {
            const topic = await Topic.findByPk(req.params?.topicId);
            if (topic) {
                const post = await Post.create({
                    userId: getUserFields().id,
                    topicId: topic.id,
                    text: req.body.text,
                    replyId: req.body.replyId
                });
                res.status(HTTP_CODE.CREATED).json(post);
            } else {
                res.sendStatus(HTTP_CODE.NOT_FOUND);
            }
        } catch (e) {
            next(e);
        }
    }
);

router.delete('/topics/:topicId/posts/:id', async (req, res, next) => {
    try {
        const count = await Post.destroy({where: {id: req.params.id, topicId: req.params.topicId}});
        if (count) {
            res.sendStatus(HTTP_CODE.OK);
        } else {
            res.sendStatus(HTTP_CODE.NOT_FOUND);
        }
    } catch (e) {
        next(e);
    }
});
