import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {Dispatch} from 'redux';
import {UiLayout} from '../../layouts';
import {Leaderboard, Button} from '~/components';

const mapDispatch = (dispatch: Dispatch) => {
    return {
        onStartGame: () => {
            // eslint-disable-next-line no-console
            console.warn(dispatch);
            // alert('start game');
        }
    };
};

const connector = connect(null, mapDispatch);

function component(props: ConnectedProps<typeof connector>): JSX.Element {
    const {onStartGame} = props;

    return (
        <UiLayout isStatic isBlock className="start-page">
            <h1 className="t-title mt-5">Start You Game</h1>
            <h2 className="t-title_2 mt-5">Best warriors</h2>
            <Leaderboard />
            <footer className="button-bar mt-5">
                <Button type="button" onClick={onStartGame}>
                    Run Game
                </Button>
            </footer>
        </UiLayout>
    );
}

export const StartPage = connector(component);
