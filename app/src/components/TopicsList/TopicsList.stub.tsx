import React from 'react';

import {TopicStub} from './TopicElement/Topic.stub';

import './TopicsList.scss';

type TopicsListStubProps = {
    count: number;
};

export const TopicsListStub = ({count}: TopicsListStubProps): JSX.Element => {
    const list = Array(count).fill(0);

    return (
        <ul className="topics-list">
            {list.map((_, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <TopicStub key={i} />
            ))}
        </ul>
    );
};
