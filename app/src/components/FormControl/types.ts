import {FormikHelpers} from 'formik';
import Yup from 'yup';

export type FormFields = Record<string, string>;

export type FormControlFieldType = 'text' | 'password' | 'email' | 'file';

export type FormControlFields = Record<
    string,
    {
        type: FormControlFieldType;
        placeholder: string;
        title: string;
        autocomplete?:
            | 'given-name'
            | 'family-name'
            | 'username'
            | 'nickname'
            | 'new-password'
            | 'current-password'
            | 'tel'
            | 'email'
            | 'off';
        initialValue?: string;
    }
>;

export interface FormControlProps {
    fields: FormControlFields;
    schema: Yup.ObjectSchema;
    children: React.ReactNode;
    onSubmit: (values: FormFields, formikHelpers: FormikHelpers<FormFields>) => void;
}
