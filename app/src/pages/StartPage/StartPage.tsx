import React, {useState} from 'react';
import {Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import {useHistory} from 'react-router-dom';
import * as Yup from 'yup';
import {AppStoreState} from 'store/types';
import type {FormControlFields} from '~/components/FormControl/types';
import {Button, Countdown, FormControl} from '~/components';
import {gameSetCharNameAction, gameStartAction} from '~/store/Game/actions';
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
        characterName: state.game.character.name || state.user.info.display_name
    };
};

const mapDispatch = (dispatch: Dispatch) => {
    return {
        setCharacterName: (formData) => {
            dispatch(gameSetCharNameAction(formData.characterName));
        },
        gameStart: (history) => {
            dispatch(gameStartAction());
            history.push('/game');
        }
    };
};

const connector = connect(mapState, mapDispatch);

function component(props: ConnectedProps<typeof connector>): JSX.Element {
    const {characterName, gameStart, setCharacterName} = props;
    const [isCountdown, setIsCountdown] = useState(false);
    formFields.characterName.initialValue = characterName ?? '';
    const history = useHistory();

    return (
        <UiLayout isStatic isBlock className="start-page">
            <h1 className="t-title mt-5">Start You Game</h1>

            <FormControl
                schema={formSchema}
                fields={formFields}
                onSubmit={(formData) => {
                    setIsCountdown(true);
                    setCharacterName(formData);
                }}
            >
                <footer className="button-bar mt-5">
                    <Button type="submit">Run Game</Button>
                </footer>
            </FormControl>
            {isCountdown ? <Countdown onFinish={() => gameStart(history)} /> : null}
        </UiLayout>
    );
}

export const StartPage = connector(component);
