import {RouteProps} from 'react-router-dom';

export interface ErrorPageProps extends RouteProps {
    type: '404' | '409' | '500';
}
