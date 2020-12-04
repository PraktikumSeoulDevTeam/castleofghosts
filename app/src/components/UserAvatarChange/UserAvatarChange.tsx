import React from 'react';
import {Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import {AppStoreState} from 'store/types';
import * as Yup from 'yup';
import {userUpdateAvatarAction} from '../../store/User/actions';
import {Button} from '../Button/Button';
import {FormControl} from '../FormControl/FormControl';
import type {FormControlFields} from '../FormControl/types';

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

const mapState = (state: AppStoreState) => {
    return {
        user: state.user.info
    };
};

const mapDispatch = (dispatch: Dispatch) => {
    return {
        onUpdate: (formData: {[key: string]: File}) => {
            const data = new FormData();
            data.append('avatar', formData.avatar);
            dispatch(userUpdateAvatarAction(data));
        }
    };
};

const connector = connect(mapState, mapDispatch);

function component(props: ConnectedProps<typeof connector>): JSX.Element {
    const {user, onUpdate} = props;

    return (
        <div>
            {user.avatar && <img src={user.avatar} alt={user.first_name} className="my-2" />}
            <FormControl schema={UserAvatarSchema} fields={UserAvatarFields} onSubmit={onUpdate}>
                <footer className="button-bar mt-5">
                    <Button type="submit">Change</Button>
                </footer>
            </FormControl>
        </div>
    );
}

export const UserAvatarChange = connector(component);
