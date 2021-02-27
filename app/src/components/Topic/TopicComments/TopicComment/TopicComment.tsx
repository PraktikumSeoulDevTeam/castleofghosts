import React from 'react';

import './TopicComment.scss';

type TopicCommentProps = {
    author: string;
    id: string;
    content: string;
    createdAt: Date;
};

export const TopicComment = (props: TopicCommentProps): JSX.Element => {
    const {author, content, createdAt, id} = props;

    return (
        <li className="topic-comment mt-4">
            <header className="topic-comment__header">
                <span>
                    #{id} by {author}
                </span>{' '}
                <span>
                    Created at: {createdAt.getFullYear()}-{createdAt.getMonth()}-{createdAt.getDate()}
                </span>
            </header>
            <p className="topic-comment__content mt-2">{content}</p>
        </li>
    );
};
