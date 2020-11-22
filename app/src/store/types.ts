import {LeadeboardState} from './Leaderboard/types';
import type {UserState} from './User/types';

export interface AppStoreState {
    user: UserState;
    leaderboard: LeadeboardState;
}
