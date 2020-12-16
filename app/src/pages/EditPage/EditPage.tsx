import React, {useState, memo} from 'react';
import {UserDataChange, UserPasswordChange, UserAvatarChange, Button} from '~/components';
import {UiLayout} from '~/layouts';

const enum VIEW_TAB {
    DATA = 'User info',
    PASSWORD = 'Password',
    AVATAR = 'Avatar'
}

const component = (): JSX.Element => {
    const [view, setView] = useState(VIEW_TAB.DATA);
    let cnt: JSX.Element;
    switch (view) {
        case VIEW_TAB.DATA:
            cnt = <UserDataChange />;
            break;
        case VIEW_TAB.PASSWORD:
            cnt = <UserPasswordChange />;
            break;
        case VIEW_TAB.AVATAR:
            cnt = <UserAvatarChange />;
            break;
        default:
    }

    return (
        <UiLayout isBlock>
            <h1 className="t-title">{view}</h1>
            <div className="button-bar mt-2">
                <Button className="btn btn_txt" onClick={() => setView(VIEW_TAB.DATA)}>
                    {VIEW_TAB.DATA}
                </Button>
                <Button className="btn btn_txt" onClick={() => setView(VIEW_TAB.PASSWORD)}>
                    {VIEW_TAB.PASSWORD}
                </Button>
                <Button className="btn btn_txt" onClick={() => setView(VIEW_TAB.AVATAR)}>
                    {VIEW_TAB.AVATAR}
                </Button>
            </div>
            {cnt}
        </UiLayout>
    );
};

export const EditPage = memo(component);
