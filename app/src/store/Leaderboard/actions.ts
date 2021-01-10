import {LB_ACTION_TYPES, LbAddAction, LbUploadAction, LbDownloadAction, LbRemoveAction} from './types';
import type {ApiGetLeaderboardRequest} from '~/api/types';
import type {GameCharacterInfo} from '~/core/types';

export function lbAddAction(leaderboardInfo: GameCharacterInfo[]): LbAddAction {
    return {
        type: LB_ACTION_TYPES.ADD,
        payload: leaderboardInfo
    };
}

export function lbUploadAction(characterInfo: GameCharacterInfo): LbUploadAction {
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
