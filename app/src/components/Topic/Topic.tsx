import React from 'react';

import {CreatePost} from '../CreatePost/CreatePost';
import {TopicBody} from './TopicBody/TopicBody';
import {TopicComments} from './TopicComments/TopicComments';
import {TopicFooter} from './TopicFooter/TopicFooter';
import {TopicHeader} from './TopicHeader/TopicHeader';

import {Topic as TopicModel} from '~/store/Forum/types';

import './Topic.scss';

type TopicProps = {
    topic: TopicModel;
};

export const Topic = (props: TopicProps): JSX.Element => {
    const {topic} = props;

    return (
        <div className="topic">
            <article className="topic-article">
                <TopicHeader title={topic.title} id={topic.id} author={topic.author} />
                <TopicBody content={topic.content} />
                <TopicFooter raiting={topic.rating} comments={topic.comments.length} createdAt={topic.createdAt} />
            </article>
            <TopicComments comments={topic.comments} />
            <CreatePost topicId={parseInt(topic.id, 10)} />
        </div>
    );
};
