export const enum UTILITY_ACTION_TYPES {
    SET_LOADING = 'cog/utility/loading'
}

export interface UtilityState {
    isLoading: boolean;
}

export interface UtilityLoadingAction {
    type: UTILITY_ACTION_TYPES.SET_LOADING;
    payload: boolean;
}

export type UtilityActions = UtilityLoadingAction;
