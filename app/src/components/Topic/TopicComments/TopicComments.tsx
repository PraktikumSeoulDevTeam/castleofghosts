import React from 'react';

import {TopicComment} from './TopicComment/TopicComment';

import {Comment} from '~/store/Forum/types';

import './TopicComments.scss';

type TopicCommentProps = {
    comments: Comment[];
};

export const TopicComments = (props: TopicCommentProps): JSX.Element => {
    const {comments} = props;

    if (!comments || !comments.length) {
        return (
            <div className="topic-comments">
                <h4>No comments</h4>
            </div>
        );
    }

    return (
        <div className="topic-comments">
            <h4 className="topic-comment__title">Comments: </h4>
            <ul className="topic-comments__list">
                {comments.map((comment) => (
                    <TopicComment
                        key={comment.id}
                        author={comment.author}
                        id={comment.id}
                        content={comment.content}
                        createdAt={comment.createdAt}
                    />
                ))}
            </ul>
        </div>
    );
};
