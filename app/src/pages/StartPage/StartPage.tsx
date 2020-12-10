import React, {useState} from 'react';
import {connect, ConnectedProps, DispatchProp} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {AppStoreState} from 'store/types';
import {gameStartAction} from '~/store/Game/actions';
import {Button, CharNameInput, Countdown} from '~/components';
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
        gameStart: (history) => {
            dispatch(gameStartAction());
            history.push('/game');
        }
    };
};

const connector = connect(mapState, null, mergeProps);

function component(props: ConnectedProps<typeof connector>): JSX.Element {
    const {characterName, gameStart} = props;
    const [isCountdown, setIsCountdown] = useState(false);
    const history = useHistory();

    return (
        <UiLayout isStatic isBlock className="start-page">
            <h1 className="t-title mt-5">Start You Game</h1>
            <h2 className="t-title_2 mt-5">New warrior name</h2>
            <CharNameInput />
            <footer className="button-bar mt-5">
                <Button type="button" onClick={() => setIsCountdown(true)} disabled={!characterName}>
                    Run Game
                </Button>
            </footer>
            {isCountdown ? <Countdown onFinish={() => gameStart(history)} /> : null}
        </UiLayout>
    );
}

export const StartPage = connector(component);
