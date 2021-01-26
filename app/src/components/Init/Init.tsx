import React from 'react';
import {connect, ConnectedProps} from 'react-redux';

import {levelsLoadAction, levelsGenerateAction} from '~/store/Level/actions';
import {oAuthResponseAction, userGeolocationGetAction, userGetAction} from '~/store/User/actions';

const mapDispatch = {
    levelsLoad: levelsLoadAction,
    levelsGenerate: levelsGenerateAction,
    userGet: userGetAction,
    userGeolocation: userGeolocationGetAction,
    oAuthResponseHandle: oAuthResponseAction
};

const connector = connect(null, mapDispatch);

export const Init = connector(
    ({
        levelsLoad,
        levelsGenerate,
        userGet,
        userGeolocation,
        oAuthResponseHandle
    }: ConnectedProps<typeof connector>): JSX.Element => {
        levelsLoad();
        levelsGenerate();
        userGeolocation();
        oAuthResponseHandle();
        userGet();

        return <></>;
    }
);
