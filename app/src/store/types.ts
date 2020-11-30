import {ToasterState} from './Toaster/types';
import type {UserState} from './User/types';
import type {GameState} from './Game/types';
import type {LeadeboardState} from './Leaderboard/types';

export interface AppStoreState {
    user: UserState;
    game: GameState;
    leaderboard: LeadeboardState;
    toaster: ToasterState;
}
