import Yup from 'yup';

type DefaultStringObject = {[key: string]: string};
export type FormControlFieldType = 'text' | 'password' | 'email';
export type FormControlFields = {
    [key: string]: {
        type: FormControlFieldType;
        placeholder: string;
        title: string;
        initialValue?: string;
    };
};
export type FormControlInputFields = DefaultStringObject;

export interface FormControlProps extends JSX.ElementChildrenAttribute {
    fields: FormControlFields;
    schema?: Yup.Schema<DefaultStringObject>;
    onSubmit?: (values: DefaultStringObject) => void;
}