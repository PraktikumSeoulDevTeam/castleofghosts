import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {AppStoreState} from 'store/types';
import {LeaderboardRecord} from '~/components/LeaderboardRecord/LeaderboardRecord';
import './Leaderboard.scss';

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
        <div>
            {leaderboardRecords.length ? (
                <div className="leaderboard__table scroll-containter px-4 mt-5">
                    <table>
                        <tbody>{leaderboardRecords}</tbody>
                    </table>
                </div>
            ) : (
                <div className="leaderboard__empty mt-5">Be the first one</div>
            )}
        </div>
    );
}

export const Leaderboard = connector(component);
