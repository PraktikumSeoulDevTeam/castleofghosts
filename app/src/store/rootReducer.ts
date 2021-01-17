import {combineReducers} from 'redux';

import {audioReducer} from './Audio/reducer';
import {gameReducer} from './Game/reducer';
import {leaderboardReducer} from './Leaderboard/reducer';
import {levelsReducer} from './Level/reducer';
import {toasterReducer} from './Toaster/reducer';
import {userReducer} from './User/reducer';
import {utilityReducer} from './Utility/reducer';

export const rootReducer = combineReducers({
    audio: audioReducer,
    user: userReducer,
    game: gameReducer,
    levels: levelsReducer,
    leaderboard: leaderboardReducer,
    toaster: toasterReducer,
    utility: utilityReducer
});
