import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import {App} from './App';
import {configStore} from './store';

import './assets';

// ReactDOM.render(<App />, document.getElementById('root'));
// eslint-disable-next-line no-underscore-dangle
configStore(window.__INITIAL_STATE__).then((store) => {
    ReactDOM.hydrate(
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>,
        document.getElementById('root')
    );
});
