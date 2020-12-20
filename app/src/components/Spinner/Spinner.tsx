import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {AppStoreState} from '~/store/types';
import './Spinner.scss';

const mapPropsToState = (state: AppStoreState) => ({
    isLoading: state.utility.isLoading
});

const connector = connect(mapPropsToState);

export const Spinner = connector(
    ({isLoading}: ConnectedProps<typeof connector>): JSX.Element => (
        <>
            {isLoading && (
                <div className="spinner-block">
                    <div className="loader" />
                </div>
            )}
        </>
    )
);
