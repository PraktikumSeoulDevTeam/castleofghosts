import React, {HTMLAttributes} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {AppStoreState} from '../../../store/types';
import './GameUi.scss';

const mapState = (state: AppStoreState) => {
    return {
        character: state.game.character
    };
};

const connector = connect(mapState);

const component = (props: ConnectedProps<typeof connector> & HTMLAttributes<HTMLDivElement>): JSX.Element => {
    const {character, className} = props;

    return (
        <div className={`game-ui ${className}`}>
            <div className="game-ui__bar">
                <span className="pa-1">{character.name}</span>
                <span className="game-ui__lvl pa-1">Level 1</span>
                <span className="pa-1">{character.points}</span>
            </div>
        </div>
    );
};

export const GameUi = connector(component);
