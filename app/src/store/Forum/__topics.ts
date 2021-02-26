import {getPostsByTopic, getTopics as getTopicsFromServer} from '~/api';

import {Topic} from './types';
import {ApiPost} from '~/api/types';

/**
 * Возвращает топики с задержкой 0.9с
 */
export async function getTopics(): Promise<Topic[]> {
    try {
        const topics = await getTopicsFromServer();
        const postsWorkers: unknown[] = [];

        topics.forEach((topic) => postsWorkers.push(getPostsByTopic(topic.id)));
        const posts: ApiPost[][] = (await Promise.all(postsWorkers)) as ApiPost[][];

        const result: Topic[] = [];

        for (let i = 0; i < topics.length; i += 1) {
            const topic: Topic = {
                id: String(topics[i].id),
                author: topics[i].user.name,
                content: topics[i].text,
                title: topics[i].header,
                createdAt: new Date(topics[i].createdAt),
                rating: Math.floor(Math.random() * 50),
                comments: []
            };

            const comments = posts[i];
            topic.comments = comments.map((comment) => ({
                author: comment.user.name,
                id: String(comment.id),
                content: comment.text,
                createdAt: new Date(comment.createdAt)
            }));

            result.push(topic);
        }

        return result;
    } catch (err) {
        return [];
    }
}
