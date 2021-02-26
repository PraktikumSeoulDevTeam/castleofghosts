import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {useParams} from 'react-router-dom';
import {Dispatch} from 'redux';

import {Topic, TopicStub} from '~/components';
import {UiLayout} from '~/layouts';
import {topicGetAction} from '~/store/Topic/actions';

import {AppStoreState} from '~/store/types';

import './TopicPage.scss';

const mapStateToProps = (state: AppStoreState) => ({
    isLoading: state.topic.isLoading,
    topic: state.topic.topic
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getTopic: (id: string) => dispatch(topicGetAction(id))
});

const connector = connect(mapStateToProps, mapDispatchToProps);

const TopicPageComponent = (props: ConnectedProps<typeof connector>): JSX.Element => {
    const {getTopic, isLoading, topic} = props;
    const params = useParams() as {id: string};
    const id = params?.id ?? '1';

    React.useEffect(() => {
        if (!topic || (topic && topic.id !== id)) {
            getTopic(id);
        }
    }, []);

    if (isLoading || !topic) {
        return (
            <UiLayout isStatic={false} isBlock className="topic-page">
                <TopicStub />
            </UiLayout>
        );
    }

    return (
        <UiLayout isStatic={false} isBlock className="topic-page">
            <Topic topic={topic} />
        </UiLayout>
    );
};

export const TopicPage = connector(TopicPageComponent);
