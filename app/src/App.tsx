import React from 'react';
import {Provider} from 'react-redux';
import {Spinner} from './components/Spinner/Spinner';
import {AppRouter} from './router/AppRouter/AppRouter';
import {store} from './store';

export const App = (): JSX.Element => {
    return (
        <Provider store={store}>
            <Spinner />
            <AppRouter />
        </Provider>
    );
};
