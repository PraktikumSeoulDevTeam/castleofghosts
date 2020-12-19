import {createStore, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {rootReducer} from './rootReducer';
import {rootSaga} from './rootSaga';
import {userGetAction} from './User/actions';
import {gameEngineMiddleware} from '~/core/engine';

const saga = createSagaMiddleware();

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(saga, gameEngineMiddleware)));

saga.run(rootSaga);

store.dispatch(userGetAction());
