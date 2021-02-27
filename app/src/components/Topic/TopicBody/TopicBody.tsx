import React from 'react';

import './TopicBody.scss';

type TopicBodyProps = {
    content: string;
};

export const TopicBody = (props: TopicBodyProps): JSX.Element => {
    const {content} = props;

    return (
        <section className="topic-body mt-5">
            <p>{content}</p>
        </section>
    );
};
