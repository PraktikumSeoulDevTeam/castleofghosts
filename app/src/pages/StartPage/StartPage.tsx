import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {UiLayout} from '../../layouts';
import type {AppStoreState} from '../../store/types';
import './StartPage.scss';
import {Leaderboard} from '~/components';

const mapState = (state: AppStoreState) => {
    return {
        leaderboard: state.leaderboard.list
    };
};

const connector = connect(mapState);

export const StartPage = connector(
    ({leaderboard}: ConnectedProps<typeof connector>): JSX.Element => {
        // eslint-disable-next-line no-console
        console.warn(leaderboard);

        return (
            <UiLayout isStatic isBlock className="start-page">
                <h1 className="t-title mt-5">Start You Game</h1>
                <h1 className="t-title_2 mt-5">Best warriors</h1>
                <Leaderboard />

                <h2 className="t-title_2 mt-2">Enter you name</h2>
            </UiLayout>
        );
    }
);
