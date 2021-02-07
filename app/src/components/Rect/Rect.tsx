import React from 'react';

import './Rect.scss';

type RectProps = {
    width?: string;
    height?: string;
    type?: 'black' | 'default';
};

export const Rect = (props: RectProps): JSX.Element => {
    const {height, width, type} = props;
    const className = `rect-block rect-block_${type}`;

    return <div className={className} style={{width, height}} />;
};

Rect.defaultProps = {
    width: null,
    height: null,
    type: 'default'
};
