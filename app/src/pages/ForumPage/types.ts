import {Topic} from '~/store/Forum/types';

export interface ForumPageProps {
    isLoading: boolean;
    getForumData: () => void;
    topics: Topic[];
}
