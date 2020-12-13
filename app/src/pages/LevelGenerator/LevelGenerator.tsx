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
            const newState = [...oldState];
            newState[i][j] = v;

            return newState;
        });
    };

    return (
        <UiLayout isStatic isBlock className="leaderboard-page">
            <h1 className="t-title mt-5">Map Creator for DEV</h1>

            <div className="generator-grid mt-5">
                {map.map((row, i) => {
                    return row.map((cell, j) => {
                        return (
                            <input
                                className="generator-grid__cell"
                                key={`${cell}_${Date.now()}_${Math.round(
                                    Math.random() * 99999
                                )}_${Date.now()}_${Math.round(Math.random() * 10000000)}`}
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
                <Button
                    onClick={() => {
                        let result = '[';
                        for (let i = 0; i < map.length; i += 1) {
                            result += '[';
                            for (let j = 0; j < map[i].length; j += 1) {
                                result += map[i][j];
                                if (j + 1 !== map[i].length) {
                                    result += ',';
                                }
                            }
                            result += ']';
                            if (i + 1 !== map.length) {
                                result += ',';
                            }
                        }
                        result += ']';

                        // eslint-disable-next-line no-console
                        console.log(result);
                    }}
                >
                    Save
                </Button>
            </div>
        </UiLayout>
    );
};
