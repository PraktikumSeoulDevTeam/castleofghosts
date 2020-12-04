import React from 'react';
import {Provider} from 'react-redux';
import {Toaster} from './components';
import {Spinner} from './components/Spinner/Spinner';
import {AppRouter} from './router/AppRouter/AppRouter';
import {store} from './store';
import './api/interceptors';

export const App = (): JSX.Element => {
    return (
        <Provider store={store}>
            <Toaster />
            <Spinner />
            <AppRouter />
        </Provider>
    );
};
