import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {Link} from 'react-router-dom';
import {Button} from '../Button/Button';
import {signOutAction} from '../../store/User/actions';
import type {AppStoreState} from '../../store/types';
import type {MenuProps} from './types';
import './Menu.scss';
import {levelGenerateAction} from '../../store/Level/actions';

const mapState = (state: AppStoreState) => {
    return {
        isAuthenticated: !!state.user.info.id
    };
};

const mapDispatch = {
    signOut: signOutAction,
    generateLevel: levelGenerateAction
};

const connector = connect(mapState, mapDispatch);

export const Menu = connector(
    ({
        isAuthenticated,
        signOut,
        className = '',
        generateLevel
    }: MenuProps & ConnectedProps<typeof connector>): JSX.Element => {
        return (
            <div className={`menu ${className}`}>
                {isAuthenticated ? (
                    <>
                        <Link
                            to="/game"
                            onClick={() =>
                                generateLevel({
                                    count: 1,
                                    difficult: 1,
                                    shapes: [[1, 1]]
                                })
                            }
                            className="t-center mt-5"
                        >
                            <Button>New game</Button>
                        </Link>
                        <Link to="/leaderboard" className="t-center mt-5">
                            <Button>Leaderboard</Button>
                        </Link>
                        <Link to="/user" className="t-center mt-5">
                            <Button>User info</Button>
                        </Link>
                        <div className="mt-5">
                            <Button onClick={signOut}>Exit</Button>
                        </div>
                    </>
                ) : (
                    <>
                        <Link to="/login" className="t-center mt-5">
                            <Button>Start</Button>
                        </Link>
                    </>
                )}
            </div>
        );
    }
);
