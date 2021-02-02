import React from 'react';

import {ForumHeader} from '~/components';
import {UiLayout} from '~/layouts';

import './ForumPage.scss';

export const ForumPage = (): JSX.Element => (
    <UiLayout isStatic={false} isBlock className="forum-page">
        <ForumHeader />
        <div className="mt-10">sss</div>
    </UiLayout>
);
