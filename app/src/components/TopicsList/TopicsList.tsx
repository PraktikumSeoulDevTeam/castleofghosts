import React from 'react';

import {TopicElement} from './TopicElement/TopicElement';

import {Topic} from '~/store/Forum/types';

import './TopicsList.scss';

type TopicsListProps = {
    topics: Topic[];
};

export const TopicsList = (props: TopicsListProps): JSX.Element => {
    const {topics} = props;

    return (
        <ul className="topics-list">
            {topics.map((topic) => (
                <TopicElement
                    key={topic.id}
                    id={topic.id}
                    title={topic.title}
                    comments={topic.comments.length}
                    createdAt={topic.createdAt}
                    raiting={topic.rating}
                />
            ))}
        </ul>
    );
};
