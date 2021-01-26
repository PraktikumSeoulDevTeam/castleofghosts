import fs from 'fs';

import {Router, Request, Response} from 'express';

const performanceRoute = Router();
const LOG_FILE_PATH = './logs/perfomance.txt';

performanceRoute.post('/', (req: Request, res: Response) => {
    fs.appendFile(LOG_FILE_PATH, JSON.stringify(req.body.data), (err) => {
        if (err) {
            // eslint-disable-next-line no-console
            console.log(err);
        }
    });
    res.json({result: 'success'});
});

export default performanceRoute;
