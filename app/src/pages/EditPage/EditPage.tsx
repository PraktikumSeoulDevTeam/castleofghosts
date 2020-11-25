import React, {useState, memo} from 'react';
import {UserDataChange, UserPasswordChange, UserAvatarChange, Button} from '../../components';
import {UiLayout} from '../../layouts';

enum ViewStatus {
    DATA_EDIT,
    PASSWORD_CHANGE,
    AVATAR_CHANGE
}
export const component = (): JSX.Element => {
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
        <UiLayout isBlock>
            <h1 className="t-title">Редактирование пользователя</h1>
            <div className="button-bar mt-2">
                <Button className="btn btn_txt" onClick={() => setView(ViewStatus.DATA_EDIT)}>
                    Данные пользователя
                </Button>
                <Button className="btn btn_txt" onClick={() => setView(ViewStatus.PASSWORD_CHANGE)}>
                    Пароль
                </Button>
                <Button className="btn btn_txt" onClick={() => setView(ViewStatus.AVATAR_CHANGE)}>
                    Аватарка
                </Button>
            </div>
            <div>{cnt}</div>
        </UiLayout>
    );
};

export const EditPage = memo(component);
