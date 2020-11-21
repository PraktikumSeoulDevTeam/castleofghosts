import {combineReducers} from 'redux';
import {gameReducer} from './Game/reducer';
import {userReducer} from './User/reducer';

export const rootReducer = combineReducers({user: userReducer, game: gameReducer});
