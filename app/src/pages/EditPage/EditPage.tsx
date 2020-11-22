import React, {useState} from 'react';
import {UserDataChange, UserPasswordChange, UserAvatarChange} from '../../components';
import './EditPage.scss';

enum ViewStatus {
    DATA_EDIT,
    PASSWORD_CHANGE,
    AVATAR_CHANGE
}
export const EditPage = (): JSX.Element => {
    const [view, setView] = useState(ViewStatus.DATA_EDIT);
    let cnt: JSX.Element;
    switch (view) {
        case ViewStatus.PASSWORD_CHANGE:
            cnt = <UserPasswordChange />;
            break;
        case ViewStatus.AVATAR_CHANGE:
            cnt = <UserAvatarChange />;
            break;
        default:
            cnt = <UserDataChange />;
            break;
    }

    return (
        <main className="ui">
            <div className="ui__inner">
                <div className="ui__top" />
                <div className="ui__center">
                    <h1 className="t-title">Редактирование пользователя</h1>
                    <div className="mt-5" />
                    <div className="editPage__tab">
                        <button className="editPag__tab-item link mr-3" onClick={() => setView(ViewStatus.DATA_EDIT)}>
                            Данные пользователя
                        </button>
                        <button
                            className="editPag__tab-item link mr-3"
                            onClick={() => setView(ViewStatus.PASSWORD_CHANGE)}
                        >
                            Пароль
                        </button>
                        <button className="editPag__tab-item link" onClick={() => setView(ViewStatus.AVATAR_CHANGE)}>
                            Аватарка
                        </button>
                    </div>
                    <div className="mt-2" />
                    {cnt}
                    <div className="mt-5" />
                </div>
                <div className="ui__bottom" />
            </div>
        </main>
    );
};
