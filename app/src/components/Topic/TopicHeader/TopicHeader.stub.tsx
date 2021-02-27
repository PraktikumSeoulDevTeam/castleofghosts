import React from 'react';

import {Rect} from '~/components/Rect/Rect';

import './TopicHeader.scss';

export const TopicHeaderStub = (): JSX.Element => (
    <header className="topic-header">
        <Rect height="50px" width="100%" />
        <Rect className="mt-1" height="30px" width="200px" />
    </header>
);
