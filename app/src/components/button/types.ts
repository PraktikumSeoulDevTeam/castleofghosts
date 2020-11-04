import {ButtonHTMLAttributes} from 'react';

export type OwnProps = {
    className: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export type Props = OwnProps;
