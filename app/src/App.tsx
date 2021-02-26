import React from 'react';

import {AudioSwitch, Init, Spinner, Toaster} from './components';
import {AppRouter} from './router/AppRouter/AppRouter';

export const App = (): JSX.Element => (
    <>
        <Toaster />
        <Spinner />
        <AudioSwitch />
        <Init />
        <AppRouter />
    </>
);

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(() => {
        // eslint-disable-next-line no-console
        console.log('Service worker registered');
    });
}
