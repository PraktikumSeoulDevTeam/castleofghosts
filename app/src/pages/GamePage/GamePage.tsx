import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {AuthButton} from '../../components';
import {AppStoreState} from '../../store/types';

const mapState = (state: AppStoreState) => {
    return {
        user: state.user.info
    };
};

const connector = connect(mapState);

const component = (props: ConnectedProps<typeof connector>): JSX.Element => {
    const {user} = props;

    return (
        <div>
            <h3>Protected Game of {user.login}</h3>
            <AuthButton />
        </div>
    );
};

export const GamePage = connector(component);
