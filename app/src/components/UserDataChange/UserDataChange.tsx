import React from 'react';
import {connect, ConnectedProps, DispatchProp} from 'react-redux';
import {AppStoreState} from 'store/types';
import * as Yup from 'yup';
import {ApiUserInfo} from 'api/types';
import {userUpdateAction} from '../../store/User/actions';
import {FORMAT} from '../../utils';
import {Button} from '../Button/Button';
import {FormControl} from '../FormControl/FormControl';
import type {FormControlFields} from '../FormControl/types';

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
        title: 'Login: '
    },
    email: {
        type: 'email',
        placeholder: 'Email',
        title: 'Email: '
    },
    phone: {
        type: 'text',
        placeholder: 'Phone',
        title: 'Phone: '
    },
    first_name: {
        type: 'text',
        placeholder: 'First name',
        title: 'First name: '
    },
    second_name: {
        type: 'text',
        placeholder: 'Second name',
        title: 'Second name: '
    },
    display_name: {
        type: 'text',
        placeholder: 'Display name',
        title: 'Display name: '
    }
};

type MappedState = {
    user: Partial<ApiUserInfo>;
};

const mapState = (state: AppStoreState): MappedState => {
    return {
        user: state.user.info
    };
};

const mergeProps = (mappedState: MappedState, dispatchProps: DispatchProp) => {
    const {dispatch} = dispatchProps;
    const {user} = mappedState;

    return {
        user,
        onUpdate: (formData: {[key: string]: string}) => {
            const userData: ApiUserInfo = {
                id: user.id,
                ...formData
            } as ApiUserInfo;
            dispatch(userUpdateAction(userData));
        }
    };
};

const connector = connect(mapState, null, mergeProps);

function component(props: ConnectedProps<typeof connector>): JSX.Element {
    const {user, onUpdate} = props;

    const FilledUserEditFields: FormControlFields = Object.keys(UserEditFields).reduce((res, key) => {
        res[key] = UserEditFields[key];
        res[key].initialValue = user[key] ?? '';

        return res;
    }, {});

    return (
        <FormControl schema={UserEditSchema} fields={FilledUserEditFields} onSubmit={onUpdate}>
            <footer className="button-bar mt-">
                <Button type="submit">Save</Button>
            </footer>
        </FormControl>
    );
}

export const UserDataChange = connector(component);
