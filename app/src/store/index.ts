import {createStore, compose, applyMiddleware, Store} from 'redux';
import createSagaMiddleware from 'redux-saga';

import {rootReducer} from './rootReducer';
import {rootSaga} from './rootSaga';

export async function configStore(defaultState = {}): Promise<Store> {
    const saga = createSagaMiddleware();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(rootReducer, defaultState, composeEnhancers(applyMiddleware(saga)));

    saga.run(rootSaga);

    return store;
}
