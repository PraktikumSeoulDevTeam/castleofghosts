import React, {useState} from 'react';
import {connect, ConnectedProps, DispatchProp} from 'react-redux';
import {AppStoreState} from 'store/types';
import {Leaderboard, Button, CharNameInput, Countdown} from '~/components';
import {UiLayout} from '~/layouts';

type MappedState = {
    characterName: string;
};

const mapState = (state: AppStoreState) => {
    return {
        characterName: state.game.character.name ?? ''
    };
};

const mergeProps = (mappedState: MappedState, dispatchProps: DispatchProp) => {
    const {dispatch} = dispatchProps;
    const {characterName} = mappedState;

    return {
        characterName,
        onStartGame: () => {
            // eslint-disable-next-line no-console
            console.warn(dispatch);
            // alert('start game');
        }
    };
};

const connector = connect(mapState, null, mergeProps);

function component(props: ConnectedProps<typeof connector>): JSX.Element {
    const {characterName} = props;
    const [isCountdown, setIsCountdown] = useState(false);

    return (
        <UiLayout isStatic isBlock className="start-page">
            <h1 className="t-title mt-5">Start You Game</h1>
            <h2 className="t-title_2 mt-5">Best warriors</h2>
            <Leaderboard />
            <h2 className="t-title_2 mt-5">New warrior name</h2>
            <CharNameInput />
            <footer className="button-bar mt-5">
                <Button type="button" onClick={() => setIsCountdown(true)} disabled={!characterName}>
                    Run Game
                </Button>
            </footer>
            {isCountdown ? <Countdown /> : null}
        </UiLayout>
    );
}

export const StartPage = connector(component);
