import path from 'path';
import express, {Request, Response} from 'express';

const PORT = process.argv[2] || process.env.PORT || 3000;

const server = express();

server.use('/', express.static(path.join(__dirname, '..', 'dist', 'app')));
server.get('*', (_req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

server.listen(PORT, () => {
    console.log(`Launched @ ${PORT}!`);
});
