import {combineReducers} from 'redux';

import {gameReducer} from './Game/reducer';
import {leaderboardReducer} from './Leaderboard/reducer';
import {levelReducer} from './Level/reducer';
import {toasterReducer} from './Toaster/reducer';
import {userReducer} from './User/reducer';
import {utilityReducer} from './Utility/reducer';

export const rootReducer = combineReducers({
    user: userReducer,
    game: gameReducer,
    level: levelReducer,
    leaderboard: leaderboardReducer,
    toaster: toasterReducer,
    utility: utilityReducer
});
