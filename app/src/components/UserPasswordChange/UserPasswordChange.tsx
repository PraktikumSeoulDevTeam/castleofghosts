import React from 'react';
import * as Yup from 'yup';
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
        title: 'New password: '
    },
    passwordConfirm: {
        type: 'password',
        placeholder: 'Confirm password',
        title: 'Confirm password:'
    }
};

export function UserPasswordChange(): JSX.Element {
    return (
        <FormControl
            schema={UserPasswordSchema}
            fields={UserPasswordFields}
            onSubmit={(formData) => {
                // eslint-disable-next-line no-console
                console.log(formData);
            }}
        >
            <footer className="button-bar mt-5">
                <Button type="submit">Change</Button>
            </footer>
        </FormControl>
    );
}
