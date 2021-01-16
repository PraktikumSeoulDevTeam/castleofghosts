import React, {useCallback} from 'react';
import {connect, ConnectedProps} from 'react-redux';

import {audioSetStateAction} from '~/store/Audio/actions';

import type {AppStoreState} from '~/store/types';
import './AudioSwitch.scss';

const mapState = (state: AppStoreState) => ({
    contextState: state.audio.contextState
});

const mapDispatch = {
    setContextState: audioSetStateAction
};

const connector = connect(mapState, mapDispatch);

export const AudioSwitch = connector(
    ({contextState, setContextState}: ConnectedProps<typeof connector>): JSX.Element => (
        <div className="audio-switch">
            <button
                onClick={useCallback(() => setContextState(contextState === 'running' ? 'suspended' : 'running'), [
                    contextState
                ])}
                className="audio-switch__button"
            >
                <div
                    className={`audio-switch__label ${
                        contextState === 'running' ? 'audio-switch__label_on' : 'audio-switch__label_off'
                    }`}
                />
            </button>
        </div>
    )
);
