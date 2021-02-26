import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import * as Yup from 'yup';

import {userUpdateAction} from '~/store/User/actions';
import {FORMAT} from '~/utils';

import {Button} from '../Button/Button';
import {FormControl} from '../FormControl/FormControl';

import type {FormControlFields, FormFields} from '../FormControl/types';
import type {ApiUserInfo} from '~/api/types';
import type {AppStoreState} from '~/store/types';

const TopicSchema = Yup.object().shape({
    text: Yup.string().required('field is required').min(5, 'minimal length: 5'),
    header: Yup.string().required('field is required').min(5, 'minimal length: 5')
});

const UserEditFields: FormControlFields = {
    header: {
        type: 'text',
        placeholder: 'Type header...',
        title: 'Topic title: '
    },
    text: {
        type: 'text',
        placeholder: 'Type text...',
        title: 'Topic text: '
    }
};

const mapState = (state: AppStoreState) => ({
    user: state.user.info
});

const mapDispatch = {
    userUpdate: userUpdateAction
};

const mergeProps = (stateProps: ReturnType<typeof mapState>, dispatchProps: typeof mapDispatch) => {
    const {user}: {user: {[key: string]: unknown}} = stateProps;
    const {userUpdate} = dispatchProps;

    return {
        user,
        onUpdate: (formData: FormFields) => {
            const userData: ApiUserInfo = {
                id: user.id,
                ...formData
            } as ApiUserInfo;
            userUpdate(userData);
        }
    };
};

const connector = connect(mapState, mapDispatch, mergeProps);

export const UserDataChange = connector(
    ({user, onUpdate}: ConnectedProps<typeof connector>): JSX.Element => {
        const FilledUserEditFields = Object.keys(UserEditFields).reduce<FormControlFields>((res, key) => {
            res[key] = UserEditFields[key];
            const userField = user[key];
            if (typeof userField === 'string') {
                res[key].initialValue = userField;
            }

            return res;
        }, {});

        return (
            <FormControl schema={UserEditSchema} fields={FilledUserEditFields} onSubmit={onUpdate}>
                <footer className="button-bar mt-5">
                    <Button type="submit">Save</Button>
                </footer>
            </FormControl>
        );
    }
);
