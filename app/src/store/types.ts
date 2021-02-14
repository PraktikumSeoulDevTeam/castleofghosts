import {AudioState} from './Audio/types';
import {ForumState} from './Forum/types';
import type {GameState} from './Game/types';
import type {LeadeboardState} from './Leaderboard/types';
import type {LevelsState} from './Level/types';
import type {ToasterState} from './Toaster/types';
import {TopicState} from './Topic/types';
import type {UserState} from './User/types';
import type {UtilityState} from './Utility/types';

export interface AppStoreState {
    audio: AudioState;
    user: UserState;
    game: GameState;
    levels: LevelsState;
    leaderboard: LeadeboardState;
    toaster: ToasterState;
    utility: UtilityState;
    forum: ForumState;
    topic: TopicState;
}
