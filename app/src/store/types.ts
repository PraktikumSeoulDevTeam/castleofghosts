import {ToasterState} from './Toaster/types';
import type {UserState} from './User/types';
import type {GameState} from './Game/types';
import type {LeadeboardState} from './Leaderboard/types';
import {UtilityState} from './Utility/types';
import {LevelState} from './Level/types';

export interface AppStoreState {
    user: UserState;
    game: GameState;
    level: LevelState;
    leaderboard: LeadeboardState;
    toaster: ToasterState;
    utility: UtilityState;
}
