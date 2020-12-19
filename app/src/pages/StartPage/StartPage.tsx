import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {Redirect} from 'react-router-dom';
import * as Yup from 'yup';
import {AppStoreState} from 'store/types';
import type {FormControlFields} from '~/components/FormControl/types';
import {Button, Countdown, FormControl} from '~/components';
import {gameCharSetNameAction, gameStartAction} from '~/store/Game/actions';
import {UiLayout} from '~/layouts';

const formSchema = Yup.object().shape({
    characterName: Yup.string().required('field is required')
});

const formFields: FormControlFields = {
    characterName: {
        type: 'text',
        placeholder: 'Input name',
        title: 'New warrior name: '
    }
};

const mapState = (state: AppStoreState) => {
    return {
        characterName: state.game.character.name,
        userName: state.user.info.display_name,
        progress: state.game.inProgress
    };
};

const mapDispatch = {
    setCharacterName: gameCharSetNameAction,
    gameStart: gameStartAction
};

const connector = connect(mapState, mapDispatch);

function component(props: ConnectedProps<typeof connector>): JSX.Element {
    const {characterName, userName, progress, gameStart, setCharacterName} = props;
    formFields.characterName.initialValue = characterName || userName;

    return progress ? (
        <Redirect push to="/game" />
    ) : (
        <UiLayout isBlock className="start-page">
            <h1 className="t-title">Start You Game</h1>

            <FormControl
                schema={formSchema}
                fields={formFields}
                onSubmit={(formData) => {
                    setCharacterName(formData.characterName);
                }}
            >
                <footer className="t-center mt-5">
                    <Button type="submit">Run Game</Button>
                </footer>
            </FormControl>
            {characterName && <Countdown onFinish={gameStart} />}
        </UiLayout>
    );
}

export const StartPage = connector(component);
