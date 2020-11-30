import React from 'react';
import {Provider} from 'react-redux';
import {Toaster} from './components';
import {AppRouter} from './router/AppRouter/AppRouter';
import {store} from './store';

export const App = (): JSX.Element => {
    return (
        <Provider store={store}>
            <Toaster />
            <AppRouter />
        </Provider>
    );
};
