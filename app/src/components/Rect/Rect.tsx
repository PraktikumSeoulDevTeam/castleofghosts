import React from 'react';

import './Rect.scss';

type RectProps = {
    width?: string;
    height?: string;
    type?: 'black' | 'default';
    className?: string;
};

export const Rect = (props: RectProps): JSX.Element => {
    const {height, width, type, className} = props;
    const cls = `rect-block rect-block_${type} ${className ?? ''}`;

    return <div className={cls} style={{width, height}} />;
};

Rect.defaultProps = {
    width: null,
    height: null,
    type: 'default',
    className: null
};
