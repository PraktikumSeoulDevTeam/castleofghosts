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
