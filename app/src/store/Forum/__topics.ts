import {getPosts, getTopics as getTopicsFromServer} from '~/api/local';

import type {Topic} from './types';

import type {ApiForumPostResponse} from '@/api.d';

/**
 * Возвращает топики с задержкой 0.9с
 */
export async function getTopics(): Promise<Topic[]> {
    try {
        const topics = await getTopicsFromServer();
        const postsWorkers: unknown[] = [];

        topics.forEach((topic) => postsWorkers.push(getPosts(topic.id)));
        const posts: ApiForumPostResponse[][] = (await Promise.all(postsWorkers)) as ApiForumPostResponse[][];

        const result: Topic[] = [];

        for (let i = 0; i < topics.length; i += 1) {
            const topic: Topic = {
                id: topics[i].id,
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
                id: comment.id,
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
