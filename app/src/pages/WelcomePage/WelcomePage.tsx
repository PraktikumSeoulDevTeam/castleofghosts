import React from 'react';
import {Copyright, Menu} from '~/components';
import {UiLayout} from '~/layouts';

export const WelcomePage = (): JSX.Element => (
    <UiLayout isBlock>
        <h1 className="welcome-page__title t-title mt-10">
            <div>Castle</div>
            <div>of</div>
            <div>Ghosts</div>
        </h1>
        <Menu className="welcome-page__menu mt-5" />
        <div className="mt-10">
            <Copyright />
        </div>
    </UiLayout>
);
