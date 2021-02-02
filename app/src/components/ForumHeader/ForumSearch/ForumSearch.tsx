import {Field, Form, Formik} from 'formik';
import React from 'react';

import './ForumSearch.scss';

export const ForumSearch = (): JSX.Element => (
    <div className="search-block">
        <Formik
            onSubmit={() => {
                // eslint-disable-next-line no-console
                console.log(`submiit!`);
            }}
            initialValues={{searchBlock: ''}}
        >
            <Form className="search-block__form">
                <Field
                    autocomplete={false}
                    placeholder="Search..."
                    className="input__field forum-search"
                    name="searchBlock"
                />
            </Form>
        </Formik>
    </div>
);
