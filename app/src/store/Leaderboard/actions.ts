import {LB_ACTION_TYPES, LbAddAction, LbUploadAction, LbDownloadAction, LbRemoveAction, LbPutAction} from './types';
import type {GameCharacterInfo} from '~/core/types';

export function lbAddAction(leaderboardInfo: GameCharacterInfo[]): LbAddAction {
    return {
        type: LB_ACTION_TYPES.ADD,
        payload: leaderboardInfo
    };
}

export function lbPutAction(leaderboardInfo: GameCharacterInfo[]): LbPutAction {
    return {
        type: LB_ACTION_TYPES.PUT,
        payload: leaderboardInfo
    };
}

export function lbUploadAction(characterInfo: GameCharacterInfo): LbUploadAction {
    return {
        type: LB_ACTION_TYPES.UPLOAD,
        payload: characterInfo
    };
}

export function lbDownloadAction(count: number): LbDownloadAction {
    return {
        type: LB_ACTION_TYPES.DOWNLOAD,
        payload: count
    };
}

export function lbRemoveAction(): LbRemoveAction {
    return {
        type: LB_ACTION_TYPES.REMOVE
    };
}
