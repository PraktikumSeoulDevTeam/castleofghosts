import React, {ButtonHTMLAttributes, memo} from 'react';
import {connect, ConnectedProps} from 'react-redux';

import {audioControlSampleAction} from '~/store/Audio/actions';

import './Button.scss';

const mapDispatch = {
    sampleControl: audioControlSampleAction
};

const connector = connect(null, mapDispatch);

export const Button = connector(
    memo(
        (props: ConnectedProps<typeof connector> & ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element => {
            const {sampleControl, children, type = 'button', className = 'btn_base', onClick, ...rest} = props;
            const onClickWrapper = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                sampleControl({
                    action: 'PLAY',
                    sample: 'CLICK'
                });
                if (onClick) {
                    onClick(event);
                }
            };

            return (
                <button type={type} className={`btn ${className}`} onClick={onClickWrapper} {...rest}>
                    {children}
                </button>
            );
        }
    )
);
