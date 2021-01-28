import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import {App} from './App';
import {configStore} from './store/configStore';

import {AppStoreState} from './store/types';

import './assets';

declare global {
    interface Window {
        __INITIAL_STATE__: AppStoreState;
    }
}

// eslint-disable-next-line no-underscore-dangle
const store = configStore(window.__INITIAL_STATE__);

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
