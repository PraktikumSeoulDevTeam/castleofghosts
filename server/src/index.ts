import compression from 'compression';
import express from 'express';

import {router as apiRouter} from './api';
import {ssrMiddleware} from './middleware/serverRender';
import {pathToApp} from './utils/paths';

const PORT = process.argv[2] || process.env.PORT || 3000;

const server = express();

server.use(compression()).use(express.static(pathToApp));
server.use('/api', apiRouter);
server.get('/*', ssrMiddleware);

server.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Launched @ ${PORT}!`);
});
