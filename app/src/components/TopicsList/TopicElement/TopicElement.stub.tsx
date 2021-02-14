import React from 'react';

import {Rect} from '~/components/Rect/Rect';

import './TopicElement.scss';

export const TopicElementStub = (): JSX.Element => (
    <li className="topic-element mt-5">
        <Rect width="100%" height="32px" type="black" />
        <div className="topic-element__statistics">
            <Rect width="250px" height="32px" />
            <Rect width="250px" height="32px" />
            <Rect width="250px" height="32px" />
        </div>
    </li>
);
