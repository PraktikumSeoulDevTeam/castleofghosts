import React from 'react';
import type {UiLayoutProps} from './types';
import './UiLayout.scss';

export const UiLayout = ({children, isStatic, isBlock, className = ''}: UiLayoutProps): JSX.Element => {
    return (
        <main className={`ui${isStatic ? ' ui_static' : ''} pa-5`}>
            <div className={`ui__container${isBlock ? ' ui__container_block' : ''} ${className} pa-5`}>{children}</div>
        </main>
    );
};
