import cookieParser from 'cookie-parser';
import express, {Router} from 'express';

import {connectMongo} from '~~/db/mongo/config';
import {connectSequelize} from '~~/db/sequelize/config';
import {retryConnect} from '~~/utils';
import {getUserInfo} from '~~/utils/auth';

import {createFeedbackRouter} from './feedback';
import {router as forumRouter} from './forum';

export const router = Router();

router.use(cookieParser());
router.use(express.json());

retryConnect(3, 10000, connectSequelize).then((client) => {
    if (client) {
        router.use('/forum', getUserInfo, forumRouter);
    }
});

retryConnect(3, 10000, connectMongo).then((client) => {
    if (client) {
        router.use('/feedback', getUserInfo, createFeedbackRouter(client));
    }
});
