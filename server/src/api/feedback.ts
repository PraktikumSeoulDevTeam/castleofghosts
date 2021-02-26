import {Router} from 'express';
import {body} from 'express-validator';
import {MongoClient} from 'mongodb';

import {validatorResultMiddleware} from '~~/utils';
import {getUserFields} from '~~/utils/auth';
import {HTTP_CODE} from '~~/utils/httpCodes';

export function createFeedbackRouter(client: MongoClient): Router {
    const router = Router();
    const db = client.db('cog');
    const collection = db.collection('feedback');

    router.post(
        '/',
        body('text').exists().notEmpty().trim().escape(),
        validatorResultMiddleware,
        async (req, res, next) => {
            try {
                const commandResult = await collection.insertOne({...req.body, user: getUserFields()});
                if (commandResult.result.ok === commandResult.result.n) {
                    res.sendStatus(HTTP_CODE.CREATED);
                } else {
                    next({statusCode: HTTP_CODE.INTERNAL_SERVER_ERROR});
                }
            } catch (e) {
                next(e);
            }
        }
    );

    return router;
}
