// import { LEADERBOARD_URL } from "./api";
export default null;
declare let self: ServiceWorkerGlobalScope;

const STORE_NAME = 'cogPostRequest';
const SYNC_NAME = 'cogOnlineEvent';
const DB_VERSION = 5;
let payload: Record<string, string>;
const LEADERBOARD_URL = '/leaderboard/all';

type DBRequestRecord = {
    id: number;
    url: string;
    method: string;
    payload: string;
};

self.addEventListener('install', () => {
    self.skipWaiting();
});

self.addEventListener('message', (event: ExtendableMessageEvent) => {
    if (event.data.url === LEADERBOARD_URL && event.data.payload) {
        // receives payload from 'getLeaderboard'
        payload = event.data.payload;
    }
});

self.addEventListener('fetch', (event: FetchEvent) => {
    if (event.request.url.includes(LEADERBOARD_URL)) {
        event.respondWith(
            (async () =>
                fetch(event.request.clone()).catch(() => {
                    saveRequests(event.request.clone().url);
                }))()
        );
    }
});

self.addEventListener('sync', (event) => {
    if (event.tag === SYNC_NAME) {
        event.waitUntil(sendRequests());
    }
});

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
        .then((registration) => registration.sync.register(SYNC_NAME))
        .catch((error) => {
            // eslint-disable-next-line no-console
            console.error('[Service worker | navigator.serviceWorker.ready | error]  ', error);
        });
}

const saveRequests = (url: string) => {
    getObjectStore(STORE_NAME, 'readwrite').add({
        url,
        payload,
        method: 'POST'
    });
};

const sendRequests = () => {
    const req = getObjectStore(STORE_NAME).openCursor();
    const savedRequests: DBRequestRecord[] = [];
    req.onsuccess = async (event): Promise<void> => {
        const cursor = event?.target?.result;
        if (cursor) {
            savedRequests.push(cursor.value);
            cursor.continue();
        } else {
            for (let i = 0; i < savedRequests.length; i++) {
                const pl = JSON.stringify(savedRequests[i].payload);
                const {method, url, id} = savedRequests[i];
                const headers = {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                };
                const credentials: RequestCredentials = 'include';
                fetch(url, {headers, credentials, method, body: pl})
                    .then((response) => {
                        if (response.status < 400) {
                            getObjectStore(STORE_NAME, 'readwrite').delete(id);
                        }
                    })
                    .catch((error) => {
                        // eslint-disable-next-line no-console
                        console.error('[Service worker | sendRequests | error] ', error);
                        throw error;
                    });
            }
        }
    };
};

const getObjectStore = (
    storeName: string,
    mode: 'readwrite' | 'readonly' | 'versionchange' | undefined = 'readwrite'
) => db.transaction([storeName], mode).objectStore(storeName);

const openDatabase = () => {
    const indexedDBOpenRequest = indexedDB.open('cog', DB_VERSION);

    indexedDBOpenRequest.onupgradeneeded = () => {
        if (db) {
            db.createObjectStore(STORE_NAME, {autoIncrement: true, keyPath: 'id'});
        }
    };

    indexedDBOpenRequest.onsuccess = (event): void => {
        db = event.target.result;
    };
};
// IDBDatabase
let db: IDBDatabase;

openDatabase();
