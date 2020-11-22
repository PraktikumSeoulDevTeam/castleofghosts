import React from 'react';
// import * as Yup from 'yup';
// import {Link} from 'react-router-dom';

// import {Button, FormControl} from '../../components';
// import {FormControlFields} from '../../components/FormControl/types';

/*
const AuthorizationSchema = Yup.object().shape({
    login: Yup.string()
        .min(5, 'min length 5 symbols')
        .max(12, 'max length 12 symbols')
        .required('field must be required'),
    password: Yup.string()
        .min(4, 'min length 4 symbols')
        .max(16, 'max length 16 symbols')
        .required('field must be required')
});

const authorizationField: FormControlFields = {
    login: {
        type: 'text',
        placeholder: 'input your login',
        title: 'Your login: '
    },
    password: {
        type: 'password',
        placeholder: 'input your password',
        title: 'Your password: '
    }
};
*/
export function AuthorizationPage(): JSX.Element {
    return (
        <main className="ui">
            <div className="ui__inner authentication">
                <h1 className="t-title authentication__title">Authorization</h1>
                {
                    {
                        /* <FormControl
                    schema={AuthorizationSchema}
                    fields={authorizationField}
                    onSubmit={(formData) => {
                        // eslint-disable-next-line no-console
                        console.log(formData);
                    }}
                >
                    <footer className="authentication__footer">
                        <Link to="/registration" className="link mr-5">
                            Registration
                        </Link>
                        <Button className="btn t-main" type="submit">
                            Enter
                        </Button>
                    </footer>
                </FormControl> */
                    }
                }
            </div>
        </main>
    );
}
