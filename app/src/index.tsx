import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import {App} from './App';
import {configStore} from './store/configStore';

import './assets';
import {AppStoreState} from './store/types';

declare global {
    interface Window {
        __INITIAL_STATE__: AppStoreState;
    }
}

// eslint-disable-next-line no-underscore-dangle
const store = configStore(window.__INITIAL_STATE__);

ReactDOM.hydrate(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
