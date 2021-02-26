import React from 'react';
import {Provider} from 'react-redux';

import {AudioSwitch, Init, Spinner, Toaster} from './components';
import {AppRouter} from './router/AppRouter/AppRouter';
import {store} from './store';

export const App = (): JSX.Element => (
    <Provider store={store}>
        <Toaster />
        <Spinner />
        <AudioSwitch />
        <Init />
        <AppRouter />
    </Provider>
);

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(() => {
        // eslint-disable-next-line no-console
        console.log('Service worker registered');
    });
}
