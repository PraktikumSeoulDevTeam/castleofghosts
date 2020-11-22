import {combineReducers} from 'redux';
import {leaderboardReducer} from './Leaderboard/reducer';
import {userReducer} from './User/reducer';

export const rootReducer = combineReducers({user: userReducer, leaderboard: leaderboardReducer});
