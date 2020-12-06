import React, {useState} from 'react';
import {UiLayout} from '../../layouts';
import {Button} from '../../components';
import './LevelGenerator.scss';

export const LevelGenerator = (): JSX.Element => {
    const [map, setMap] = useState(
        Array(15)
            .fill([])
            .map(() => Array(30).fill(0))
    );

    const changeState = (i, j, v) => {
        setMap((oldState) => {
            oldState[i][j] = parseInt(v, 10);
            console.log(`change ->`);
            return oldState;
        });
    };

    return (
        <UiLayout isStatic isBlock className="leaderboard-page">
            <h1 className="t-title mt-5">Create Map</h1>

            <div className="generator-grid mt-5">
                {map.map((row, i) => {
                    return row.map((cell, j) => {
                        return (
                            <input
                                className="generator-grid__cell"
                                key={`${cell}_${Date.now()}_${Math.round(Math.random() * 99999)}`}
                                value={cell}
                                onChange={((i1, j1) => (ev) => {
                                    const val = ev.target.value;
                                    changeState(i1, j1, val);
                                })(i, j)}
                            />
                        );
                    });
                })}
            </div>

            <div className="mt-5">
                <Button>Save</Button>
            </div>
        </UiLayout>
    );
};
