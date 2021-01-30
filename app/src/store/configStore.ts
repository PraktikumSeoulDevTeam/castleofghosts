import {createStore, compose, applyMiddleware, Store} from 'redux';
import createSagaMiddleware from 'redux-saga';

import {isServer} from '~/utils';

import {rootReducer} from './rootReducer';
import {rootSaga} from './rootSaga';

export function configStore(defaultState = {}): Store {
    const saga = createSagaMiddleware();
    let composeEnhancers = compose;

    if (!isServer) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    }

    const store = createStore(rootReducer, defaultState, composeEnhancers(applyMiddleware(saga)));

    if (!isServer) {
        saga.run(rootSaga);
    }

    return store;
}