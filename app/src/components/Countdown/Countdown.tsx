import React, {memo} from 'react';

import type {CountdownProps} from './types';
import './Countdown.scss';

export const Countdown = memo(
    ({onFinish}: CountdownProps): JSX.Element => (
        <div className="countdown" onAnimationEnd={onFinish}>
            <div className="countdown__inner">
                <div className="countdown__item">5</div>
                <div className="countdown__item">4</div>
                <div className="countdown__item">3</div>
                <div className="countdown__item">2</div>
                <div className="countdown__item">1</div>
            </div>
        </div>
    )
);
