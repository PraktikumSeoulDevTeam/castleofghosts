import React, {PureComponent} from 'react';
import {Props} from './types';
import './Button.scss';

class Button extends PureComponent<Props> {
    public render(): JSX.Element {
        const {className, children} = this.props;

        return (
            <button className={className} type="button">
                {children}
            </button>
        );
    }
}

Button.defaultProps = {
    className: 'btn t-main',
    type: 'button'
};
export default Button;
