import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {AppStoreState} from '../../store/types';
import './Spinner.scss';

const mapPropsToState = (state: AppStoreState) => ({
    isLoading: state.utility.isLoading
});

const connector = connect(mapPropsToState);

function SpinnerComponent({isLoading}: ConnectedProps<typeof connector>): JSX.Element {
    if (!isLoading) {
        return null;
    }

    return (
        <div className="spinner-block">
            <div className="loader" />
        </div>
    );
}

export const Spinner = connector(SpinnerComponent);
