import React from 'react';
import {Provider} from 'react-redux';

import {FullScreenApi} from '~/webApi/fullScreen';

import {Spinner, Toaster} from './components';
import {AppRouter} from './router/AppRouter/AppRouter';
import {store} from './store';

FullScreenApi.initFullScreenByButton();

export const App = (): JSX.Element => (
    <Provider store={store}>
        <Toaster />
        <Spinner />
        <AppRouter />
    </Provider>
);
