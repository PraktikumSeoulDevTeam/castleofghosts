import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {Link} from 'react-router-dom';
import {Button} from '../../components';
import {LeaderboardRecord} from './LeaderboardRecord/LeaderboardRecord';
import {UiLayout} from '../../layouts';
import type {AppStoreState} from '../../store/types';
import './LeaderboardPage.scss';

const mapState = (state: AppStoreState) => {
    return {
        leaderboard: state.leaderboard.list
    };
};

const connector = connect(mapState);

function component({leaderboard}: ConnectedProps<typeof connector>): JSX.Element {
    const leaderboardRecords = leaderboard.map((character, index) => (
        <LeaderboardRecord key={character.id} position={index + 1} character={character} />
    ));

    return (
        <UiLayout isBlock className="leaderboard-page">
            <h1 className="t-title mt-5">
                <span>Best warriors</span>
            </h1>
            <div className="scroll-containter px-4 mt-5">
                <table className="leaderboard-page__table">
                    <tbody>{leaderboardRecords}</tbody>
                </table>
            </div>
            <Link to="/" className="t-center mt-5">
                <Button>Return</Button>
            </Link>
        </UiLayout>
    );
}

export const LeaderboardPage = connector(component);
