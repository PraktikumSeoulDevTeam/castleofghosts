import {combineReducers} from 'redux';
import {userReducer} from './User/reducer';
import {gameReducer} from './Game/reducer';
import {leaderboardReducer} from './Leaderboard/reducer';
import {utilityReducer} from './Utility/reducer';

export const rootReducer = combineReducers({
    user: userReducer,
    game: gameReducer,
    leaderboard: leaderboardReducer,
    utility: utilityReducer
});
