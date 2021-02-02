import React from 'react';

import './ForumHeader.scss';
import {ForumSearch} from './ForumSearch/ForumSearch';

export const ForumHeader = (): JSX.Element => (
    <header className="forum-header">
        <h2 className="forum-header__logo">CastleForum</h2>
        <ForumSearch />
    </header>
);
