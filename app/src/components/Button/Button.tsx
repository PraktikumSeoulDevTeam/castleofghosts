import React, {ButtonHTMLAttributes, memo} from 'react';
import './Button.scss';

export const Button = memo(
    ({
        children,
        className = 'btn t-main',
        type = 'button',
        ...rest
    }: ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element => (
        <button type={type} className={className} {...rest}>
            {children}
        </button>
    )
);
