import type {ApiGetLeaderboardRequest} from '../../api/types';
import type {GameCharacterInfo} from '../../core/types';

export const enum LB_ACTION_TYPES {
    ADD = 'cog/lb/add',
    UPLOAD = 'cog/lb/upload',
    DOWNLOAD = 'cog/lb/download',
    REMOVE = 'cog/lb/remove'
}

export interface LeadeboardState {
    list: GameCharacterInfo[];
}

export interface LbAddAction {
    type: LB_ACTION_TYPES.ADD;
    payload: GameCharacterInfo[];
}

export interface LbUploadAction {
    type: LB_ACTION_TYPES.UPLOAD;
    payload: GameCharacterInfo;
}

export interface LbDownloadAction {
    type: LB_ACTION_TYPES.DOWNLOAD;
    payload: ApiGetLeaderboardRequest;
}

export interface LbRemoveAction {
    type: LB_ACTION_TYPES.REMOVE;
}

export type LbActions = LbAddAction | LbUploadAction | LbDownloadAction | LbRemoveAction;
