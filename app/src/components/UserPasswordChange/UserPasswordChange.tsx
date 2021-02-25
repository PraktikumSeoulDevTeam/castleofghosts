import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {Dispatch} from 'redux';
import * as Yup from 'yup';

import {userUpdatePasswordAction} from '~/store/User/actions';

import {FormControl} from '../FormControl/FormControl';

import type {FormControlFields, FormFields} from '../FormControl/types';
import type {ApiChangePasswordRequest} from '~/api/types';

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

const mapDispatch = (dispatch: Dispatch) => ({
    onUpdate: (formData: FormFields) => {
        const data: ApiChangePasswordRequest = {
            oldPassword: formData.passwordCurrent,
            newPassword: formData.passwordNew
        };
        dispatch(userUpdatePasswordAction(data));
    }
});

const connector = connect(null, mapDispatch);

export const UserPasswordChange = connector(
    ({children, onUpdate}: ConnectedProps<typeof connector> & JSX.ElementChildrenAttribute): JSX.Element => (
        <FormControl schema={UserPasswordSchema} fields={UserPasswordFields} onSubmit={onUpdate}>
            {children}
        </FormControl>
    )
);
