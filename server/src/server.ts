import path from 'path';

import compression from 'compression';
import express from 'express';

import {serverRemderMiddleware} from './middleware/serverRender';

const PORT = process.argv[2] || process.env.PORT || 3000;

const server = express();

server.use(compression()).use(express.static(path.resolve(__dirname, '../../dist/app')));

server.get('/*', serverRemderMiddleware);

server.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Launched @ ${PORT}!`);
});
