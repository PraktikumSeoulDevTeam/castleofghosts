import React from 'react';
import './Countdown.scss';
import {CountdownProps} from './types';

export function Countdown(props: CountdownProps): JSX.Element {
    const {onFinish} = props;

    return (
        <div className="countdown" onAnimationEnd={onFinish}>
            <div className="countdown__inner">
                <div className="countdown__item">5</div>
                <div className="countdown__item">4</div>
                <div className="countdown__item">3</div>
                <div className="countdown__item">2</div>
                <div className="countdown__item">1</div>
            </div>
        </div>
    );
}
