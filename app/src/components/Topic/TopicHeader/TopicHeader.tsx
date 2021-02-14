import React from 'react';
import {Link} from 'react-router-dom';

import './TopicHeader.scss';

type TopicHeaderProps = {
    title: string;
    author: string;
    id: string;
};

export const TopicHeader = (props: TopicHeaderProps): JSX.Element => {
    const {author, id, title} = props;

    return (
        <header className="topic-header">
            <h1 className="topic-header__title">
                <Link to="/forum" title="Back...">
                    <i className="fas fa-long-arrow-alt-left topic-header__back" />
                </Link>
                #{id} {title}
            </h1>
            <div className="topic-header__author mt-2">by {author}</div>
        </header>
    );
};
