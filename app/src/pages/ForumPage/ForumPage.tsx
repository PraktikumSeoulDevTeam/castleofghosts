import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {Dispatch} from 'redux';

import {ForumHeader, TopicsList, TopicsListStub} from '~/components';
import {CreateTopic} from '~/components/CreateTopic/CreateTopic';
import {UiLayout} from '~/layouts';
import {forumGetDataAction} from '~/store/Forum/actions';

import {AppStoreState} from '~/store/types';

import './ForumPage.scss';

const mapStateToProps = (state: AppStoreState) => ({
    isLoading: state.forum.isLoading,
    topics: state.forum.topics
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getForumData: () => {
        dispatch(forumGetDataAction());
    }
});

const connector = connect(mapStateToProps, mapDispatchToProps);

const ForumPageComponent = (props: ConnectedProps<typeof connector>): JSX.Element => {
    const {isLoading, getForumData, topics} = props;

    React.useEffect(() => {
        if (!topics || !topics.length) {
            getForumData();
        }
    }, []);

    if (isLoading) {
        return (
            <UiLayout isStatic={false} isBlock className="forum-page">
                <ForumHeader />
                <TopicsListStub count={4} />
            </UiLayout>
        );
    }

    return (
        <UiLayout isStatic={false} isBlock className="forum-page">
            <ForumHeader />
            <TopicsList topics={topics} />
            <div className="forum-form">
                <CreateTopic />
            </div>
        </UiLayout>
    );
};

export const ForumPage = connector(ForumPageComponent);
