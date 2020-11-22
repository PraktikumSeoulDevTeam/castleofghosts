import React from 'react';
import * as Yup from 'yup';
import 'yup-phone';
import {FormControlFields} from '../FormControl/types';
import {Button} from '../Button/Button';
import {FormControl} from '../FormControl/FormControl';

const UserPasswordSchema = Yup.object().shape({
    passwordCurrent: Yup.string()
        .min(5, 'min length 5 symbols')
        .max(22, 'max length 22 symbols')
        .required('field must be required'),
    passwordNew: Yup.string()
        .min(5, 'min length 5 symbols')
        .max(22, 'max length 22 symbols')
        .required('field must be required'),
    passwordConfirm: Yup.string()
        .min(5, 'min length 5 symbols')
        .max(22, 'max length 22 symbols')
        .required('field must be required')
        .test('passwords-match', 'Passwords must match', function compareValues(value) {
            return this.parent.passwordNew === value;
        })
});

const UserPasswordFields: FormControlFields = {
    passwordCurrent: {
        type: 'password',
        placeholder: 'Input your current password',
        title: 'Current password: '
    },
    passwordNew: {
        type: 'password',
        placeholder: 'Input your new password',
        title: 'New password: '
    },
    passwordConfirm: {
        type: 'password',
        placeholder: 'Confirm your new password',
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
            <div className="mt-5" />
            <footer>
                <Button className="btn t-main" type="submit">
                    Change
                </Button>
            </footer>
        </FormControl>
    );
}
