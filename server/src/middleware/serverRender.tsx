import {Request, Response} from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {Provider as ReduxProvider} from 'react-redux';
import {StaticRouterContext} from 'react-router';
import {StaticRouter} from 'react-router-dom';

import {App} from '../../../app/src/App';
import {configStore} from '../../../app/src/store/configStore';

function getHtml(reactHtml: string, reduxState = {}) {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <link rel="shortcut icon" type="image/png" href="/images/favicon.png">
          <title>Castle of Ghosts</title>
          <link href="/main.css" rel="stylesheet">
      </head>
      <body>
          <div id="root">${reactHtml}</div>
          <script>
              window.__INITIAL_STATE__ = ${JSON.stringify(reduxState)}
          </script>
          <script src="/main.bundle.js"></script>
      </body>
      </html>
  `;
}

export function serverRemderMiddleware(req: Request, res: Response): void {
    const store = configStore();
    const location = req.url;
    const context: StaticRouterContext = {};

    const jsx = (
        <ReduxProvider store={store}>
            <StaticRouter context={context} location={location}>
                <App />
            </StaticRouter>
        </ReduxProvider>
    );

    const reactHtml = renderToString(jsx);
    const reduxState = store.getState();

    res.status(200).send(getHtml(reactHtml, reduxState));
}
