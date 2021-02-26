import {Sequelize} from 'sequelize-typescript';

import {onShutDown} from '~~/utils';

import {User, Topic, Post} from './models';

const {DB_PG_URI} = process.env;

export async function connectSequelize(connectURI = DB_PG_URI): Promise<Sequelize | undefined> {
    try {
        if (connectURI) {
            const client = new Sequelize(connectURI, {
                pool: {
                    min: 0,
                    max: 10,
                    idle: 30000
                },
                models: [User, Topic, Post]
            });

            await client.authenticate();
            await client.sync();
            // eslint-disable-next-line no-console
            console.log('[connectSequelize] Connected');
            onShutDown(() =>
                client.close().then(() => {
                    // eslint-disable-next-line no-console
                    console.log('[connectSequelize] Disconnected');
                })
            );

            return client;
        }
        // eslint-disable-next-line no-console
        console.error('[connectSequelize] No connect URI');

        return undefined;
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error('[connectSequelize] Unable to connect: ', error);

        return Promise.reject(error);
    }
}
