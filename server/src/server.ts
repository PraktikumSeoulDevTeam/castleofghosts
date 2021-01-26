import path from 'path';

import bodyParser from 'body-parser';
import express, {Request, Response} from 'express';

import performanceRoute from './perfomance';

const PORT = process.argv[2] || process.env.PORT || 3000;

const server = express();
server.use(bodyParser.json());

server.use('/', express.static(path.join(__dirname, '..', 'dist', 'app')));
server.use('/performance', performanceRoute);
server.get('*', (_req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '..', 'dist', 'app', 'index.html'));
});

server.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Launched @ ${PORT}!`);
});
