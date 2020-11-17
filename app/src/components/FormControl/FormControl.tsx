import React from 'react';
import {Formik, Form, Field, FormikErrors, FormikTouched} from 'formik';
import {FormControlProps, FormControlFields, FormControlInputFields} from './types';
import './FormControl.scss';

const RenderFields = (
    fields: FormControlFields,
    errors: FormikErrors<FormControlInputFields>,
    touched: FormikTouched<FormControlInputFields>
) =>
    Object.entries(fields).map(([fieldName, {placeholder, type, title}]) => (
        <div className="form-block__input-container" key={fieldName} style={{color: 'white'}}>
            <label htmlFor={fieldName}>
                <div className="form-block__title">{title}</div>
                <Field placeholder={placeholder} className="form-block__input" type={type} name={fieldName} />
            </label>
            <div className="form-block__validation-message">
                {touched[fieldName] && errors[fieldName] ? errors[fieldName] : ''}
            </div>
        </div>
    ));

export function FormControl({fields, schema, onSubmit, children}: FormControlProps): JSX.Element {
    const initialValues: FormControlInputFields = Object.keys(fields).reduce((res, key) => {
        res[key] = '';
        return res;
    }, {});

    return (
        <Formik initialValues={initialValues} validationSchema={schema} onSubmit={onSubmit}>
            {({errors, touched}) => (
                <Form className="authorization__form-block form-block">
                    {RenderFields(fields, errors, touched)}
                    {children}
                </Form>
            )}
        </Formik>
    );
}
