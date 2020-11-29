import React from 'react';
import type {UiLayoutProps} from './types';
import './UiLayout.scss';

export function UiLayout({children, isBlock, className}: UiLayoutProps): JSX.Element {
    return (
        <>
            <main className="ui pa-8">
                <div className={`ui__container pa-5 ${isBlock ? 'ui__block' : ''} ${className || ''}`}>{children}</div>
            </main>
        </>
    );
}
