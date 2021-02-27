import React from 'react';
import {Link} from 'react-router-dom';

import './ForumHeader.scss';

export const ForumHeader = (): JSX.Element => (
    <header className="forum-header">
        <h2 className="forum-header__logo">
            <Link to="/" title="Back...">
                <i className="fas fa-long-arrow-alt-left forum-header__back" />
            </Link>
            CastleForum
        </h2>
    </header>
);
