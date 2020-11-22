import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {userWatcher} from './User/sagas';
import {userReducer} from './User/reducer';

const rootReducer = combineReducers({user: userReducer});
const saga = createSagaMiddleware();

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(saga)));

saga.run(userWatcher);
