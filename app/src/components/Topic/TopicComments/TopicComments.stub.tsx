import React from 'react';

import {Rect} from '~/components/Rect/Rect';

import './TopicComments.scss';

export const TopicCommentsStub = (): JSX.Element => (
    <div className="topic-comments">
        <Rect width="300px" height="50px" type="black" />
        <ul className="topic-comments__list">
            <Rect className="mt-4 mb-4" width="100%" height="150px" />
            <Rect className="mb-4" width="100%" height="150px" />
            <Rect className="mb-4" width="100%" height="150px" />
            <Rect width="100%" height="150px" />
        </ul>
    </div>
);
