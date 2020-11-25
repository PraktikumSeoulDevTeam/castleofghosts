import React from 'react';
import * as Yup from 'yup';
import {FORMAT} from '../../utils';
import {Button} from '../Button/Button';
import {FormControl} from '../FormControl/FormControl';
import type {FormControlFields} from '../FormControl/types';

const UserEditSchema = Yup.object().shape({
    login: Yup.string().required('field is required').max(22, 'max length 22 symbols'),
    email: Yup.string().email('invalid email'),
    phoneNumber: Yup.string()
        .trim()
        .matches(...FORMAT.PHONE)
        .required('field is required'),
    firstName: Yup.string(),
    secondName: Yup.string()
});

const UserEditFields: FormControlFields = {
    login: {
        type: 'text',
        placeholder: 'Login',
        title: 'Login: '
    },
    email: {
        type: 'email',
        placeholder: 'Email',
        title: 'Email: '
    },
    phoneNumber: {
        type: 'text',
        placeholder: 'Phone',
        title: 'Phone: '
    },
    firstName: {
        type: 'text',
        placeholder: 'First name',
        title: 'First name: '
    },
    secondName: {
        type: 'text',
        placeholder: 'Second name',
        title: 'Second name: '
    }
};

export function UserDataChange(): JSX.Element {
    return (
        <FormControl
            schema={UserEditSchema}
            fields={UserEditFields}
            onSubmit={(formData) => {
                // eslint-disable-next-line no-console
                console.log(formData);
            }}
        >
            <footer className="button-bar mt-">
                <Button type="submit">Save</Button>
            </footer>
        </FormControl>
    );
}
