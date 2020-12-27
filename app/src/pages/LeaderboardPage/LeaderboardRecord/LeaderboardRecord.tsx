import React from 'react';

import type {LeaderboardRecordProps} from './types';
import './LeaderboardRecord.scss';

export const LeaderboardRecord = ({position, character}: LeaderboardRecordProps): JSX.Element => (
    <tr className="lb-record pa-1">
        <td className="lb-record__position pa-1">{position}</td>
        <td className="lb-record__name pa-1 px-5">{character.name}</td>
        <td className="lb-record__points pa-1">{character.points}</td>
    </tr>
);
