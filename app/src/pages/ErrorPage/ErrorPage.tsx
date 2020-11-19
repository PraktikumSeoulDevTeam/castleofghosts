import React from 'react';
import type {ErrorPageProps} from './types';

export const ErrorPage = ({type}: ErrorPageProps): JSX.Element => <h3>{type}</h3>;
