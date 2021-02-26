import React from 'react';

import {AudioSwitch, Init, Spinner, Toaster} from './components';
import {AppRouter} from './router/AppRouter/AppRouter';
import {isServer} from './utils';

export const App = (): JSX.Element => (
    <>
        <Toaster />
        <Spinner />
        <AudioSwitch />
        <Init />
        <AppRouter />
    </>
);

if (!isServer && 'serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(() => {
        // eslint-disable-next-line no-console
        console.log('Service worker registered');
    });
}
