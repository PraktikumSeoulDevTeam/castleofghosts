import React from 'react';

import './TopicFooter.scss';

type TopicFooterProps = {
    comments: number;
    raiting: number;
    createdAt: Date;
};

export const TopicFooter = (props: TopicFooterProps): JSX.Element => {
    const {comments, createdAt, raiting} = props;

    return (
        <footer className="topic-footer mt-5">
            <div>Comments: {comments}</div>
            <div>Raiting: {raiting}</div>
            <div>
                Created at: {createdAt.getFullYear()}-{createdAt.getMonth()}-{createdAt.getDate()}
            </div>
        </footer>
    );
};
