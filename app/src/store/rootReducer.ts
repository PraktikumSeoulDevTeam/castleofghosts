import {combineReducers} from 'redux';
import {userReducer} from './User/reducer';
import {gameReducer} from './Game/reducer';
import {leaderboardReducer} from './Leaderboard/reducer';
import {toasterReducer} from './Toaster/reducer';
import {utilityReducer} from './Utility/reducer';
import {levelReducer} from './Level/reducer';

export const rootReducer = combineReducers({
    user: userReducer,
    game: gameReducer,
    level: levelReducer,
    leaderboard: leaderboardReducer,
    toaster: toasterReducer,
    utility: utilityReducer
});
