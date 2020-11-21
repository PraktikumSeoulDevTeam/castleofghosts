import type {GameState} from './Game/types';
import type {UserState} from './User/types';

export interface AppStoreState {
    user: UserState;
    game: GameState;
}
