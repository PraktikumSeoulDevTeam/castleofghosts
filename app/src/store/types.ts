import type {GameState} from './Game/types';
import type {LeadeboardState} from './Leaderboard/types';
import type {ToasterState} from './Toaster/types';
import type {UserState} from './User/types';
import type {UtilityState} from './Utility/types';

export interface AppStoreState {
    user: UserState;
    game: GameState;
    leaderboard: LeadeboardState;
    toaster: ToasterState;
    utility: UtilityState;
}
