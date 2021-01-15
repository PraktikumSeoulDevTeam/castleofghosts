import React from 'react';
import {Provider} from 'react-redux';

import {Spinner, Toaster} from './components';
import {AppRouter} from './router/AppRouter/AppRouter';
import {store} from './store';

export const App = (): JSX.Element => (
    <Provider store={store}>
        <Toaster />
        <Spinner />
        <AppRouter />
    </Provider>
);
