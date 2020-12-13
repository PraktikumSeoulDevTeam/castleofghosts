import React from 'react';
import {Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';

import {toasterRemoveAction} from '../../store/Toaster/actions';
import {AppStoreState} from '../../store/types';
import {Button} from '../Button/Button';

import './Toaster.scss';

const mapStateToProps = (state: AppStoreState) => ({
    toasts: state.toaster.toastes
});

const mapActionToProps = (dispatch: Dispatch) => ({
    removeToast: (id: string) => dispatch(toasterRemoveAction(id))
});

const connector = connect(mapStateToProps, mapActionToProps);

const Toast = ({text, onClick}) => (
    <li className="toast-element mt-4 t-small">
        <Button className="toast-element__exit" onClick={onClick}>
            x
        </Button>
        <span>{text}</span>
    </li>
);

function ToasterComponent({toasts, removeToast}: ConnectedProps<typeof connector>): JSX.Element {
    return (
        <ul className="toast-container mr-4">
            {toasts.map((toast) => (
                <Toast key={toast.id} text={toast.text} onClick={() => removeToast(toast.id)} />
            ))}
        </ul>
    );
}

export const Toaster = connector(ToasterComponent);
