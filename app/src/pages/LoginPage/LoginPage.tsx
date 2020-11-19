import React, {useState} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {Redirect, useLocation} from 'react-router-dom';
import {AuthButton} from '../../components';
import type {AppStoreState} from '../../store/types';
import type {AuthNavLocation} from './types';

const mapState = (state: AppStoreState) => {
    return {
        isAuthenticated: !!state.user.info.id
    };
};

const connector = connect(mapState);

const component = (props: ConnectedProps<typeof connector>): JSX.Element => {
    const {isAuthenticated} = props;
    const location = useLocation<AuthNavLocation>();
    const {from} = location.state || {from: {pathname: '/game'}};

    // Локальный стор используется для примера
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const onChangeHandler = (cb: React.Dispatch<React.SetStateAction<string>>) => (
        e: React.ChangeEvent<HTMLInputElement>
    ) => cb(e.target.value);

    return isAuthenticated ? (
        <Redirect to={from} />
    ) : (
        <div style={{color: 'white'}}>
            <h3 className="t-title">Avtorizuites v sisteme</h3>

            <label htmlFor="login" className="t-main">
                <div>Login:</div>
                <input type="text" name="login" value={login} onChange={onChangeHandler(setLogin)} />
            </label>

            <label htmlFor="password" className="t-main">
                <div>Password:</div>
                <input type="password" name="password" value={password} onChange={onChangeHandler(setPassword)} />
            </label>

            <div>
                <AuthButton data={{login, password}} />
            </div>
        </div>
    );
};

export const LoginPage = connector(component);
