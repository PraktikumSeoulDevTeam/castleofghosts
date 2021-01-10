import React from 'react';
import {connect, ConnectedProps} from 'react-redux';

import {toasterRemoveAction} from '~/store/Toaster/actions';

import {Button} from '../Button/Button';

import type {toasterProps} from './types';
import type {AppStoreState} from '~/store/types';
import './Toaster.scss';

const mapStateToProps = (state: AppStoreState) => ({
    toasts: state.toaster.toastes
});

const mapActionToProps = {
    removeToast: toasterRemoveAction
};

const connector = connect(mapStateToProps, mapActionToProps);

const Toast = ({text, onClick}: toasterProps) => (
    <li className="toast-element mt-4 t-small">
        <Button className="toast-element__exit" onClick={onClick}>
            x
        </Button>
        <span>{text}</span>
    </li>
);

export const Toaster = connector(
    ({toasts, removeToast}: ConnectedProps<typeof connector>): JSX.Element => (
        <ul className="toast-container mr-4">
            {toasts.map((toast) => (
                <Toast key={toast.id} text={toast.text} onClick={() => removeToast(toast.id)} />
            ))}
        </ul>
    )
);
