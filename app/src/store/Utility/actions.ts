import {UtilityLoadingAction, UTILITY_ACTION_TYPES} from './types';

export function utilitySetLoading(isLoading: boolean): UtilityLoadingAction {
    return {
        type: UTILITY_ACTION_TYPES.SET_LOADING,
        payload: isLoading
    };
}
