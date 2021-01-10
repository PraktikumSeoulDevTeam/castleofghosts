import {ReactNode} from 'react';

export interface UiLayoutProps {
    children: ReactNode;
    isStatic?: boolean;
    isBlock?: boolean;
    className?: string;
}
