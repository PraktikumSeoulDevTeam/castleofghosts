import React from 'react';

import {Rect} from '~/components/Rect/Rect';

import './TopicFooter.scss';

export const TopicFooterStub = (): JSX.Element => (
    <footer className="topic-footer mt-5">
        <Rect width="200px" height="40px" type="black" />
        <Rect width="200px" height="40px" type="black" />
        <Rect width="200px" height="40px" type="black" />
    </footer>
);
