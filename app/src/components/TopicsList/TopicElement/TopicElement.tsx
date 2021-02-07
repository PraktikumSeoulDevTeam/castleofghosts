import React from 'react';

import './TopicElement.scss';

type TopicProps = {
    id: string;
    title: string;
    comments: number;
    raiting: number;
    createdAt: Date;
};

export const TopicElement = (props: TopicProps): JSX.Element => {
    const {comments, createdAt, id, raiting, title} = props;

    return (
        <li className="topic-element mb-5">
            <h4 className="topic-element__header">
                #{id} {title}
            </h4>
            <div className="topic-element__statistics">
                <div>Comments: {comments}</div>
                <div>Raiting: {raiting}</div>
                <div>Created at: {`${createdAt.getFullYear()}-${createdAt.getMonth()}-${createdAt.getDate()}`}</div>
            </div>
        </li>
    );
};
