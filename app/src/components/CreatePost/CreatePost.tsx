import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import * as Yup from 'yup';

import {forumCreatePostAction} from '~/store/Forum/actions';

import {Button} from '../Button/Button';
import {FormControl} from '../FormControl/FormControl';

import type {FormControlFields} from '../FormControl/types';

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

const mapDispatch = {
    createPost: forumCreatePostAction
};

const connector = connect(null, mapDispatch);

export const CreatePost = connector(
    ({createPost, topicId}: ConnectedProps<typeof connector> & {topicId: number}): JSX.Element => (
        <FormControl
            schema={PostSchema}
            fields={CreatePostFields}
            onSubmit={(form) =>
                createPost({
                    post: {
                        text: form.text || ''
                    },
                    id: topicId
                })
            }
        >
            <footer className="button-bar mt-5">
                <Button type="submit">Create Post</Button>
            </footer>
        </FormControl>
    )
);
