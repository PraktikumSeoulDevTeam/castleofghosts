/* eslint-disable @typescript-eslint/ban-ts-comment */
import fs from 'fs';

import {Request, Response} from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {Provider as ReduxProvider} from 'react-redux';
import {StaticRouter, StaticRouterContext} from 'react-router';
import {createStore} from 'redux';

import {HTTP_CODE} from '~~/utils/httpCodes';
import {pathToIndex} from '~~/utils/paths';

// @ts-ignore
import {App} from '../../../app/src/App';
// @ts-ignore
import {rootReducer} from '../../../app/src/store/rootReducer';

export function ssrMiddleware(req: Request, res: Response): void {
    const location = req.url;
    const context: StaticRouterContext = {};
    const store = createStore(rootReducer);

    const app = renderToString(
        <ReduxProvider store={store}>
            <StaticRouter context={context} location={location}>
                <App />
            </StaticRouter>
        </ReduxProvider>
    );

    if (context.url) {
        res.redirect(context.url);

        return;
    }

    const reduxState = store.getState();
    fs.readFile(pathToIndex, 'utf8', (error, data) => {
        if (error) {
            // eslint-disable-next-line no-console
            console.error('[ssrMiddleware] Error read index.html: ', error);

            return res.status(HTTP_CODE.INTERNAL_SERVER_ERROR);
        }

        return res.send(
            data
                .replace('<div id="root"></div>', `<div id="root">${app}</div>`)
                .replace('window.__INITIAL_STATE__ = {}', `window.__INITIAL_STATE__ = ${reduxState}`)
        );
    });
}
