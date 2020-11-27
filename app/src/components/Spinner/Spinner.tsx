import React from 'react';
import './Spinner.scss';

export function Spinner(): JSX.Element {
    return (
        <div className="spinner-block">
            <div className="loader" />
        </div>
    );
}
