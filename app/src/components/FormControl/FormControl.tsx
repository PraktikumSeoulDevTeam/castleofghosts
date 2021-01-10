import {Formik, Form, Field, ErrorMessage} from 'formik';
import React from 'react';

import type {FormControlProps, FormControlFields, FormFieldComponentProps, FormFields} from './types';
import './FormControl.scss';

const FormFile = ({formikHelpers, field}: FormFieldComponentProps): JSX.Element => (
    <input
        className="input__field"
        name={field.name}
        type="file"
        id={field.name}
        onChange={(e) => formikHelpers.setFieldValue(field.name, e.target.files?.[0])}
    />
);

const RenderFields = (fields: FormControlFields): JSX.Element[] =>
    Object.entries(fields).map(([fieldName, {placeholder, type, title, autocomplete = 'off'}]) => (
        <div className="input mb-4" key={fieldName}>
            <label htmlFor={fieldName}>
                <div className="input__title">{title}</div>
                <Field
                    placeholder={placeholder}
                    className="input__field my-1"
                    spellCheck="false"
                    type={type}
                    name={fieldName}
                    id={fieldName}
                    autoComplete={autocomplete}
                    component={type === 'file' ? FormFile : null}
                />
            </label>
            <ErrorMessage
                name={fieldName}
                render={(msg: string) => <span className="input__validation-message">{msg}</span>}
            />
        </div>
    ));

export const FormControl = ({fields, schema, onSubmit, children}: FormControlProps): JSX.Element => {
    const initialValues = Object.keys(fields).reduce<FormFields>((res, key) => {
        res[key] = fields[key].initialValue ?? '';

        return res;
    }, {});

    return (
        <Formik initialValues={initialValues} validationSchema={schema} onSubmit={onSubmit}>
            {() => (
                <Form className="mt-5">
                    {RenderFields(fields)}
                    {children}
                </Form>
            )}
        </Formik>
    );
};
