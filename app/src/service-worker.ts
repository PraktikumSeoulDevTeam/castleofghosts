// import { LEADERBOARD_URL } from "./api";
export default null;
declare let self: ServiceWorkerGlobalScope;

const STORE_NAME = 'cogPostRequest';

self.addEventListener('install', () => {
    self.skipWaiting();
});

let payload = null;

self.addEventListener('message', (event: MessageEvent) => {
    if (event.data.url === LEADERBOARD_URL && event.data.payload) {
        // receives payload from 'getLeaderboard'
        payload = event.data.payload;
    }
});

export const LEADERBOARD_URL = '/leaderboard/all';
self.addEventListener('fetch', (event: FetchEvent) => {
    if (event.request.url.includes(LEADERBOARD_URL)) {
        event.respondWith(
            (async () =>
                fetch(event.request.clone()).catch(() => {
                    savePostRequests(event.request.clone().url);
                }))()
        );
    }
});

const savePostRequests = (url) => {
    getObjectStore(STORE_NAME, 'readwrite').add({
        url,
        payload,
        method: 'POST'
    });
};

const getObjectStore = (storeName: string, mode: 'readwrite' | 'readonly' | 'versionchange' | undefined) =>
    db.transaction([storeName], mode).objectStore(storeName);

const openDatabase = () => {
    const indexedDBOpenRequest = indexedDB.open('cog', 4);

    indexedDBOpenRequest.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (db) {
            db.createObjectStore(STORE_NAME, {autoIncrement: true, keyPath: 'id'});
        }
    };

    indexedDBOpenRequest.onsuccess = (event) => {
        db = event.target.result;
    };
};
// IDBDatabase
let db: IDBDatabase;

openDatabase();
