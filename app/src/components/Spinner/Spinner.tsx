import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {AppStoreState} from '../../store/types';
import './Spinner.scss';

const mapPropsToState = (state: AppStoreState) => ({
    isLoading: state.utility.isLoading
});

const connector = connect(mapPropsToState);

const SpinnerComponent = ({isLoading}: ConnectedProps<typeof connector>): JSX.Element =>
    isLoading && (
        <div className="spinner-block">
            <div className="loader" />
        </div>
    );

export const Spinner = connector(SpinnerComponent);
