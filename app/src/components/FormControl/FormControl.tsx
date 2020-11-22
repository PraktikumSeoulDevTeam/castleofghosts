import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {FormControlProps, FormControlFields, FormControlInputFields} from './types';
import './FormControl.scss';

const RenderFields = (fields: FormControlFields): JSX.Element[] =>
    Object.entries(fields).map(([fieldName, {placeholder, type, title}]) => (
        <div className="form-block__input-container input-container" key={fieldName} style={{color: 'white'}}>
            <label htmlFor={fieldName}>
                <div className="input-container__title">{title}</div>
                <Field placeholder={placeholder} className="input-container__input" type={type} name={fieldName} />
            </label>
            <ErrorMessage
                name={fieldName}
                render={(msg: string) => <span className="input-container__validation-message">{msg}</span>}
            />
        </div>
    ));

export function FormControl({fields, schema, onSubmit, children}: FormControlProps): JSX.Element {
    const initialValues: FormControlInputFields = Object.keys(fields).reduce((res, key) => {
        res[key] = fields[key].initialValue ?? '';

        return res;
    }, {});

    return (
        <Formik initialValues={initialValues} validationSchema={schema} onSubmit={onSubmit}>
            {() => (
                <Form className="authorization__form-block form-block">
                    {RenderFields(fields)}
                    {children}
                </Form>
            )}
        </Formik>
    );
}
