import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {userWatcher} from './User/sagas';
import {userReducer} from './User/reducer';

const rootReducer = combineReducers({user: userReducer});
const saga = createSagaMiddleware();

export const store = createStore(
    rootReducer,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line no-underscore-dangle
    compose(applyMiddleware(saga), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

saga.run(userWatcher);
