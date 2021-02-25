import React, {useState, memo} from 'react';
import {Link} from 'react-router-dom';

import {UserDataChange, UserPasswordChange, UserAvatarChange, Button} from '~/components';
import {UiLayout} from '~/layouts';

const enum VIEW_TAB {
    DATA = 'User info',
    PASSWORD = 'Password',
    AVATAR = 'Avatar'
}

const userEditFormFooter: JSX.Element = (
    <footer className="button-bar mt-5">
        <Link to="/">
            <Button className="btn_txt">Return</Button>
        </Link>
        <Button type="submit">Save</Button>
    </footer>
);

export const EditPage = memo(
    (): JSX.Element => {
        const [view, setView] = useState(VIEW_TAB.DATA);
        let cnt: JSX.Element;
        switch (view) {
            case VIEW_TAB.PASSWORD:
                cnt = <UserPasswordChange>{userEditFormFooter}</UserPasswordChange>;
                break;
            case VIEW_TAB.AVATAR:
                cnt = <UserAvatarChange>{userEditFormFooter}</UserAvatarChange>;
                break;
            case VIEW_TAB.DATA:
            default:
                cnt = <UserDataChange>{userEditFormFooter}</UserDataChange>;
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
    }
);
