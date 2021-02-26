import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import * as Yup from 'yup';

import {forumCreatePostAction} from '~/store/Forum/actions';

import {Button} from '../Button/Button';
import {FormControl} from '../FormControl/FormControl';

import type {FormControlFields, FormFields} from '../FormControl/types';
import type {ApiCreatePost} from '~/api/types';

const PostSchema = Yup.object().shape({
    text: Yup.string().required('field is required').min(5, 'minimal length: 5')
});

const CreatePostFields: FormControlFields = {
    text: {
        type: 'text',
        placeholder: 'Type text...',
        title: 'Post text: '
    }
};

const mapState = () => ({});

const mapDispatch = {
    createPost: forumCreatePostAction
};

const mergeProps = (_stateProps: unknown, dispatchProps: typeof mapDispatch) => {
    const {createPost} = dispatchProps;

    return {
        onSubmit: (formData: FormFields, id: number) => {
            const post: ApiCreatePost = {
                text: formData.text ? formData.text : ''
            } as ApiCreatePost;
            createPost({
                post,
                id
            });
        }
    };
};

const connector = connect(mapState, mapDispatch, mergeProps);

export const CreatePost = connector(
    ({onSubmit, topicId}: ConnectedProps<typeof connector> & {topicId: number}): JSX.Element => (
        <FormControl schema={PostSchema} fields={CreatePostFields} onSubmit={(field) => onSubmit(field, topicId)}>
            <footer className="button-bar mt-5">
                <Button type="submit">Create Post</Button>
            </footer>
        </FormControl>
    )
);
