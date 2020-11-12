import React from 'react';
import {Props} from './types';
import './Button.scss';

export function Button(props: Props): JSX.Element {
    const {className, children} = props;
    return (
        <button className={className} type="button">
            {children}
        </button>
    );
}

Button.defaultProps = {
    className: 'btn t-main'
};
