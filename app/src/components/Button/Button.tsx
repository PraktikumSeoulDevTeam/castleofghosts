import React, {ButtonHTMLAttributes, memo} from 'react';
import './Button.scss';

function component(props: ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element {
    const {children, ...rest} = props;

    return <button {...rest}>{children}</button>;
}

component.defaultProps = {
    className: 'btn t-main',
    type: 'button'
};

export const Button = memo(component);
