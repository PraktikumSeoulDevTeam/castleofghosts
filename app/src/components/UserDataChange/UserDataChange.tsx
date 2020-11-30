import React from 'react';
import {Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
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
    id: {
        type: 'hidden',
        placeholder: '',
        title: 'id'
    },
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

const mapState = (state: AppStoreState) => {
    return {
        user: state.user.info
    };
};

const mapDispatch = (dispatch: Dispatch) => {
    return {
        onUpdate: (formData: {[key: string]: string}) => {
            const userData: ApiUserInfo = {
                id: parseInt(formData.id, 10),
                ...formData
            } as ApiUserInfo;
            dispatch(userUpdateAction(userData));
        }
    };
};

const connector = connect(mapState, mapDispatch);

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
