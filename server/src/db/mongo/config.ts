import {MongoClient} from 'mongodb';

import {onShutDown} from '~~/utils';

const {DB_MONGO_URI} = process.env;

export async function connectMongo(connectURI = DB_MONGO_URI): Promise<MongoClient | undefined> {
    try {
        if (connectURI) {
            const client = new MongoClient(connectURI);
            await client.connect();
            if (client.isConnected()) {
                // eslint-disable-next-line no-console
                console.log('[connectMongo] Connected');
                onShutDown(() =>
                    client.close().then(() => {
                        // eslint-disable-next-line no-console
                        console.log('[connectMongo] Disconnected');
                    })
                );

                return client;
            }
        }
        // eslint-disable-next-line no-console
        console.error('[connectMongo] No connect URI');

        return undefined;
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error('[connectMongo] Unable to connect: ', error);

        return Promise.reject(error);
    }
}
