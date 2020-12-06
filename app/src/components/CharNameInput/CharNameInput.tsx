import React, {ChangeEvent, useEffect} from 'react';
import {connect, ConnectedProps, DispatchProp} from 'react-redux';
import {AppStoreState} from 'store/types';
import {gameSetCharNameAction} from '~/store/Game/actions';

type MappedState = {
    userDisplayName: string;
    characterName: string;
};

const mapState = (state: AppStoreState) => {
    return {
        userDisplayName: state.user.info.display_name ?? '',
        characterName: state.game.character.name ?? ''
    };
};

const mergeProps = (mappedState: MappedState, dispatchProps: DispatchProp) => {
    const {dispatch} = dispatchProps;
    const {userDisplayName, characterName} = mappedState;

    return {
        userDisplayName,
        characterName,
        onChange: (e: ChangeEvent) => {
            dispatch(gameSetCharNameAction(e.target.value));
        },
        initValue: () => {
            dispatch(gameSetCharNameAction(userDisplayName));
        }
    };
};

const connector = connect(mapState, null, mergeProps);

function component(props: ConnectedProps<typeof connector>): JSX.Element {
    const {userDisplayName, characterName, onChange, initValue} = props;

    useEffect(() => {
        if (!characterName && userDisplayName) {
            initValue();
        }
    }, []);

    return <input type="text" value={characterName} onChange={onChange} />;
}

export const CharNameInput = connector(component);
