import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import type {FormControlProps, FormControlFields, FormControlInputFields, FormFieldComponentProps} from './types';
import './FormControl.scss';

const FormFile = ({form, field}: FormFieldComponentProps): JSX.Element => (
    <input
        className="input__field"
        name={field.name}
        type="file"
        id={field.name}
        onChange={(e) => form.setFieldValue(field.name, e.target.files[0])}
    />
);
const RenderFields = (fields: FormControlFields): JSX.Element[] => {
    return Object.entries(fields).map(([fieldName, {placeholder, type, title}]) => (
        <div className="input mb-4" key={fieldName}>
            <label htmlFor={fieldName}>
                <div className="input__title">{title}</div>
                <Field
                    placeholder={placeholder}
                    className="input__field my-1"
                    type={type}
                    name={fieldName}
                    id={fieldName}
                    component={type === 'file' ? FormFile : null}
                />
            </label>
            <ErrorMessage
                name={fieldName}
                render={(msg: string) => <span className="input__validation-message">{msg}</span>}
            />
        </div>
    ));
};

export function FormControl({fields, schema, onSubmit, children}: FormControlProps): JSX.Element {
    const initialValues: FormControlInputFields = Object.keys(fields).reduce((res, key) => {
        res[key] = fields[key].initialValue ?? '';

        return res;
    }, {});

    return (
        <Formik initialValues={initialValues} validationSchema={schema} onSubmit={onSubmit}>
            {() => {
                return (
                    <Form className="mt-5">
                        {RenderFields(fields)}
                        {children}
                    </Form>
                );
            }}
        </Formik>
    );
}
