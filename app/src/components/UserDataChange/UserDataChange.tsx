import React from 'react';
import * as Yup from 'yup';
import {FORMAT} from '../../utils';
import {Button} from '../Button/Button';
import {FormControl} from '../FormControl/FormControl';
import type {FormControlFields} from '../FormControl/types';

const UserEditSchema = Yup.object().shape({
    login: Yup.string().required('field must be required').max(22, 'max length 22 symbols'),
    email: Yup.string().email('invalid email'),
    phoneNumber: Yup.string()
        .trim()
        .matches(...FORMAT.PHONE)
        .required('field must be required'),
    firstName: Yup.string(),
    secondName: Yup.string()
});

const UserEditFields: FormControlFields = {
    login: {
        type: 'text',
        placeholder: 'Input your login',
        title: 'Login: '
    },
    email: {
        type: 'email',
        placeholder: 'Input your email',
        title: 'Email: '
    },
    phoneNumber: {
        type: 'text',
        placeholder: 'Input your phone',
        title: 'Phone: '
    },
    firstName: {
        type: 'text',
        placeholder: 'Input your first name',
        title: 'First name: '
    },
    secondName: {
        type: 'text',
        placeholder: 'Input your second name',
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
            <div className="mt-5" />
            <footer>
                <Button type="submit">Save</Button>
            </footer>
        </FormControl>
    );
}
