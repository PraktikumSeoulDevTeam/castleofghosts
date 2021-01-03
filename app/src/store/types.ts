import type {GameState} from './Game/types';
import type {LeadeboardState} from './Leaderboard/types';
import {LevelState} from './Level/types';
import {ToasterState} from './Toaster/types';
import type {UserState} from './User/types';
import type {UtilityState} from './Utility/types';

export interface AppStoreState {
    user: UserState;
    game: GameState;
    level: LevelState;
    leaderboard: LeadeboardState;
    toaster: ToasterState;
    utility: UtilityState;
}
