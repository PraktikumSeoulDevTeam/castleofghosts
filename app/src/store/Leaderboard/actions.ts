import {LB_ACTION_TYPES, LbAddAction, LbUploadAction, LbDownloadAction, LbRemoveAction} from './types';
import type {ApiCharacterInfo, ApiGetLeaderboardRequest} from '~/api/types';

export function lbAddAction(leaderboardInfo: ApiCharacterInfo[]): LbAddAction {
    return {
        type: LB_ACTION_TYPES.ADD,
        payload: leaderboardInfo
    };
}

export function lbUploadAction(characterInfo: ApiCharacterInfo): LbUploadAction {
    return {
        type: LB_ACTION_TYPES.UPLOAD,
        payload: characterInfo
    };
}

export function lbDownloadAction(leaderboardRequest: ApiGetLeaderboardRequest): LbDownloadAction {
    return {
        type: LB_ACTION_TYPES.DOWNLOAD,
        payload: leaderboardRequest
    };
}

export function lbRemoveAction(): LbRemoveAction {
    return {
        type: LB_ACTION_TYPES.REMOVE
    };
}
