import React, {useEffect} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {Link} from 'react-router-dom';

import {Button} from '~/components';
import {UiLayout} from '~/layouts';
import {lbDownloadAction} from '~/store/Leaderboard/actions';

import {LeaderboardRecord} from './LeaderboardRecord/LeaderboardRecord';

import type {AppStoreState} from '~/store/types';
import './LeaderboardPage.scss';

const mapState = (state: AppStoreState) => ({
    leaderboard: state.leaderboard.list
});

const mapDispatch = {
    loadLeaderboard: lbDownloadAction
};

const connector = connect(mapState, mapDispatch);

export const LeaderboardPage = connector(
    ({leaderboard, loadLeaderboard}: ConnectedProps<typeof connector>): JSX.Element => {
        const leaderboardRecords = leaderboard.map((character, index) => (
            <LeaderboardRecord key={character.id} position={index + 1} character={character} />
        ));

        useEffect(() => {
            loadLeaderboard(10);
        }, []);

        return (
            <UiLayout isStatic isBlock className="leaderboard-page">
                <h1 className="t-title mt-5">Best warriors</h1>
                {leaderboardRecords.length ? (
                    <div className="leaderboard-page__table scroll-containter px-4 mt-5">
                        <table>
                            <tbody>{leaderboardRecords}</tbody>
                        </table>
                    </div>
                ) : (
                    <div className="leaderboard-page__empty mt-5">Be the first one</div>
                )}
                <Link to="/" className="t-center mt-5">
                    <Button>Return</Button>
                </Link>
            </UiLayout>
        );
    }
);
