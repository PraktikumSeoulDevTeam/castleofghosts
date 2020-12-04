import {ApiChangePasswordRequest} from 'api/types';
import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {Dispatch} from 'redux';
import * as Yup from 'yup';
import {userUpdatePasswordAction} from '../../store/User/actions';
import {Button} from '../Button/Button';
import {FormControl} from '../FormControl/FormControl';
import type {FormControlFields} from '../FormControl/types';

const UserPasswordSchema = Yup.object().shape({
    passwordCurrent: Yup.string()
        .min(5, 'min length 5 symbols')
        .max(22, 'max length 22 symbols')
        .required('field is required'),
    passwordNew: Yup.string()
        .min(5, 'min length 5 symbols')
        .max(22, 'max length 22 symbols')
        .required('field is required'),
    passwordConfirm: Yup.string()
        .min(5, 'min length 5 symbols')
        .max(22, 'max length 22 symbols')
        .required('field is required')
        .test('passwords-match', 'Passwords must match', function compareValues(value) {
            return this.parent.passwordNew === value;
        })
});

const UserPasswordFields: FormControlFields = {
    passwordCurrent: {
        type: 'password',
        placeholder: 'Current password',
        title: 'Current password: '
    },
    passwordNew: {
        type: 'password',
        placeholder: 'New password',
        title: 'New password: ',
        autocomplete: 'new-password'
    },
    passwordConfirm: {
        type: 'password',
        placeholder: 'Confirm password',
        title: 'Confirm password:'
    }
};

const mapDispatch = (dispatch: Dispatch) => {
    return {
        onUpdate: (formData: {[key: string]: string}) => {
            const data: ApiChangePasswordRequest = {
                oldPassword: formData.passwordCurrent,
                newPassword: formData.passwordNew
            };
            dispatch(userUpdatePasswordAction(data));
        }
    };
};

const connector = connect(null, mapDispatch);

function component(props: ConnectedProps<typeof connector>): JSX.Element {
    const {onUpdate} = props;

    return (
        <FormControl schema={UserPasswordSchema} fields={UserPasswordFields} onSubmit={onUpdate}>
            <footer className="button-bar mt-5">
                <Button type="submit">Change</Button>
            </footer>
        </FormControl>
    );
}

export const UserPasswordChange = connector(component);
