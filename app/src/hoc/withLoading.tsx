import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Spinner} from '../components/Spinner/Spinner';
import {AppStoreState} from '../store/types';
import {utilitySetLoading} from '../store/Utility/actions';

export interface WithLoadingProps {
    setLoading: (isLoading: boolean) => void;
}

export function withLoading<Props>(Component: React.ComponentType) {
    return (props: React.PropsWithChildren<Props>): JSX.Element => {
        const isLoading = useSelector((state: AppStoreState) => state.utility.isLoading);
        const dispatcher = useDispatch();

        const setLoading = useCallback((payload: boolean) => {
            dispatcher(utilitySetLoading(payload));
        }, []);

        if (isLoading) {
            return (
                <>
                    <Spinner />
                    <Component setLoading={setLoading} {...props} />
                </>
            );
        }

        return <Component setLoading={setLoading} {...props} />;
    };
}
