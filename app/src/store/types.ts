import {AudioState} from './Audio/types';
import type {GameState} from './Game/types';
import type {LeadeboardState} from './Leaderboard/types';
import type {LevelState} from './Level/types';
import type {ToasterState} from './Toaster/types';
import type {UserState} from './User/types';
import type {UtilityState} from './Utility/types';

export interface AppStoreState {
    audio: AudioState;
    user: UserState;
    game: GameState;
    level: LevelState;
    leaderboard: LeadeboardState;
    toaster: ToasterState;
    utility: UtilityState;
}
