import React, {useState} from 'react';
import {connect, ConnectedProps} from 'react-redux';

import {LEVEL_TIME, STATE} from '~/core/params';
import {gameCharAddTimeAction, gameSetStateAction} from '~/store/Game/actions';

import type {AppStoreState} from '~/store/types';

const mapDispatch = {
    setState: gameSetStateAction,
    charAddTime: gameCharAddTimeAction
};

const mapStore = (store: AppStoreState) => ({
    state: store.game.state
});

const connector = connect(mapStore, mapDispatch);

export const Timer = connector(
    ({state, setState, charAddTime}: ConnectedProps<typeof connector>): JSX.Element => {
        const [timer, setTimer] = useState(0);

        React.useEffect(() => {
            switch (state) {
                case STATE.LEVEL_START: {
                    setTimer(LEVEL_TIME);
                    break;
                }
                case STATE.GAME: {
                    const clearId = setTimeout(() => {
                        if (timer <= 0) {
                            setState(STATE.LOOSE);
                        } else {
                            setTimer(timer - 1);
                        }
                    }, 1000);

                    return () => clearInterval(clearId);
                }
                case STATE.LEVEL_END: {
                    charAddTime(timer);
                    break;
                }
                default:
            }

            return undefined;
        }, [state, timer]);

        return <>{timer}</>;
    }
);
