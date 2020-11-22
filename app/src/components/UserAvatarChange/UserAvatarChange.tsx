import React from 'react';
import * as Yup from 'yup';
import 'yup-phone';
import {FormControlFields} from '../FormControl/types';
import {Button} from '../Button/Button';
import {FormControl} from '../FormControl/FormControl';

const fileConditions = {
    MAX_FILE_SIZE: 1000000,
    SUPPORTED_FORMATS: ['image/jpg', 'image/jpeg', 'image/gif', 'image/png']
};

const UserAvatarSchema = Yup.object().shape({
    avatar: Yup.mixed()
        .required('A file is required')
        .test('fileSize', 'File Size is too large', (value) => value && value.size <= fileConditions.MAX_FILE_SIZE)
        .test(
            'fileType',
            'Unsupported File Format',
            (value) => value && fileConditions.SUPPORTED_FORMATS.includes(value.type)
        )
});

const UserAvatarFields: FormControlFields = {
    avatar: {
        type: 'file',
        placeholder: 'Upload you avatar',
        title: 'Avatar'
    }
};

export function UserAvatarChange(): JSX.Element {
    return (
        <FormControl
            schema={UserAvatarSchema}
            fields={UserAvatarFields}
            onSubmit={(formData) => {
                // eslint-disable-next-line no-console
                console.log(formData);
            }}
        >
            <div className="mt-5" />
            <footer>
                <Button className="btn t-main" type="submit">
                    Change
                </Button>
            </footer>
        </FormControl>
    );
}
