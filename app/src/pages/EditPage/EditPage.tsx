import React from 'react';
import {UserEdit, UserPassword} from '../../components';

export const EditPage = (): JSX.Element => {
    return (
        <main className="ui">
            <div className="ui__inner">
                <div className="ui__top" />
                <div className="ui__center">
                    <h1 className="t-title">Редактирование пользователя</h1>
                    <UserEdit />
                    <UserPassword />

                    <div className="mt-5" />
                </div>
                <div className="ui__bottom" />
            </div>
        </main>
    );
};
