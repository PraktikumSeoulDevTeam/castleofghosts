import React from 'react';

import {TopicBodyStub} from './TopicBody/TopicBody.stub';
import {TopicCommentsStub} from './TopicComments/TopicComments.stub';
import {TopicFooterStub} from './TopicFooter/TopicFooter.stub';
import {TopicHeaderStub} from './TopicHeader/TopicHeader.stub';

import './Topic.scss';

export const TopicStub = (): JSX.Element => (
    <div className="topic">
        <article className="topic-article">
            <TopicHeaderStub />
            <TopicBodyStub />
            <TopicFooterStub />
        </article>
        <TopicCommentsStub />
    </div>
);
