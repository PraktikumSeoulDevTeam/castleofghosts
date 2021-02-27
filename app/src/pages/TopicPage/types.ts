import {Topic} from '~/store/Forum/types';

export interface TopicPageProps {
    topic: Topic;
    isLoading: boolean;
    loadingTopic: () => void;
}
