import React from 'react';
import * as Yup from 'yup';
import 'yup-phone';
import {FormControlFields} from '../FormControl/types';
import {Button} from '../Button/Button';
import {FormControl} from '../FormControl/FormControl';

const UserEditSchema = Yup.object().shape({
    login: Yup.string()
        .min(5, 'min length 5 symbols')
        .max(22, 'max length 22 symbols')
        .required('field must be required'),
    email: Yup.string().email('invalid email'),
    phoneNumber: Yup.string().phone('*', false, 'phone number is not valid').required('field must be required'),
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
