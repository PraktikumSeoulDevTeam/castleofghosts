import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import * as Yup from 'yup';

import {userUpdateAction} from '~/store/User/actions';
import {FORMAT} from '~/utils';

import {FormControl} from '../FormControl/FormControl';

import type {FormControlFields, FormFields} from '../FormControl/types';
import type {ApiUserInfo} from '~/api/types';
import type {AppStoreState} from '~/store/types';

const UserEditSchema = Yup.object().shape({
    login: Yup.string().required('field is required').max(22, 'max length 22 symbols'),
    email: Yup.string().email('invalid email'),
    phone: Yup.string()
        .trim()
        .matches(...FORMAT.PHONE)
        .required('field is required'),
    first_name: Yup.string().required('field is required'),
    second_name: Yup.string().required('field is required'),
    display_name: Yup.string().required('field is required')
});

const UserEditFields: FormControlFields = {
    login: {
        type: 'text',
        placeholder: 'Login',
        title: 'Login: ',
        autocomplete: 'username'
    },
    email: {
        type: 'email',
        placeholder: 'Email',
        title: 'Email: ',
        autocomplete: 'email'
    },
    phone: {
        type: 'text',
        placeholder: 'Phone',
        title: 'Phone: ',
        autocomplete: 'tel'
    },
    first_name: {
        type: 'text',
        placeholder: 'First name',
        title: 'First name: ',
        autocomplete: 'given-name'
    },
    second_name: {
        type: 'text',
        placeholder: 'Second name',
        title: 'Second name: ',
        autocomplete: 'family-name'
    },
    display_name: {
        type: 'text',
        placeholder: 'Display name',
        title: 'Display name: ',
        autocomplete: 'nickname'
    }
};

const mapState = (state: AppStoreState) => ({
    user: state.user.info
});

const mapDispatch = {
    userUpdate: userUpdateAction
};

const mergeProps = (
    stateProps: ReturnType<typeof mapState>,
    dispatchProps: typeof mapDispatch,
    ownProps: JSX.ElementChildrenAttribute
) => {
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
        },
        ...ownProps
    };
};

const connector = connect(mapState, mapDispatch, mergeProps);

export const UserDataChange = connector(
    ({children, user, onUpdate}: ConnectedProps<typeof connector>): JSX.Element => {
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
                {children}
            </FormControl>
        );
    }
);
