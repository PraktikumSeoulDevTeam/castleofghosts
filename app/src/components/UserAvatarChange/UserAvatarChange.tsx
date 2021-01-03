import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {Dispatch} from 'redux';
import * as Yup from 'yup';

import {userUpdateAvatarAction} from '~/store/User/actions';

import {Button} from '../Button/Button';
import {FormControl} from '../FormControl/FormControl';

import type {FormControlFields, FormFields} from '../FormControl/types';
import type {AppStoreState} from '~/store/types';

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

const mapState = (state: AppStoreState) => ({
    avatar: state.user.info.avatar,
    firstName: state.user.info.first_name
});

const mapDispatch = (dispatch: Dispatch) => ({
    onUpdate: (formData: FormFields) => {
        const data = new FormData();
        data.append('avatar', formData.avatar);
        dispatch(userUpdateAvatarAction(data));
    }
});

const connector = connect(mapState, mapDispatch);

export const UserAvatarChange = connector(
    ({avatar, firstName, onUpdate}: ConnectedProps<typeof connector>): JSX.Element => (
        <div>
            {avatar && <img src={avatar} alt={firstName} className="my-2" />}

            <FormControl schema={UserAvatarSchema} fields={UserAvatarFields} onSubmit={onUpdate}>
                <footer className="button-bar mt-5">
                    <Button type="submit">Change</Button>
                </footer>
            </FormControl>
        </div>
    )
);
