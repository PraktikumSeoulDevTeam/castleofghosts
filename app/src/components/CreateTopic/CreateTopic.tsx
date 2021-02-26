import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import * as Yup from 'yup';

import {forumCreateTopicAction} from '~/store/Forum/actions';

import {Button} from '../Button/Button';
import {FormControl} from '../FormControl/FormControl';

import type {FormControlFields, FormFields} from '../FormControl/types';
import type {ApiCreateTopic} from '~/api/types';

const TopicSchema = Yup.object().shape({
    text: Yup.string().required('field is required').min(5, 'minimal length: 5'),
    header: Yup.string().required('field is required').min(5, 'minimal length: 5')
});

const CreateTopicFields: FormControlFields = {
    header: {
        type: 'text',
        placeholder: 'Type header...',
        title: 'Topic title: '
    },
    text: {
        type: 'text',
        placeholder: 'Type text...',
        title: 'Topic text: '
    }
};

const mapState = () => ({});

const mapDispatch = {
    createTopic: forumCreateTopicAction
};

const mergeProps = (_stateProps: unknown, dispatchProps: typeof mapDispatch) => {
    const {createTopic} = dispatchProps;

    return {
        onSubmit: (formData: FormFields) => {
            const topic: ApiCreateTopic = {
                text: formData.text ? formData.text : '',
                header: formData.header ? formData.header : ''
            } as ApiCreateTopic;
            createTopic(topic);
        }
    };
};

const connector = connect(mapState, mapDispatch, mergeProps);

export const CreateTopic = connector(
    ({onSubmit}: ConnectedProps<typeof connector>): JSX.Element => (
        <FormControl schema={TopicSchema} fields={CreateTopicFields} onSubmit={onSubmit}>
            <footer className="button-bar mt-5">
                <Button type="submit">Create Topic</Button>
            </footer>
        </FormControl>
    )
);
