// import { LEADERBOARD_URL } from "./api";
import {API_URL} from '~/api';
import {getObjectStore, openDatabase} from '~/services/IDB/IDB';

const STORE_NAME = 'cogPostRequest';
const SYNC_NAME = 'cogOnlineEvent';

const LEADERBOARD_URL = '/leaderboard/all'; // COMMENT ON PROD
const URLS: string[] = [LEADERBOARD_URL];
let payload: Record<string, string>;

openDatabase(STORE_NAME);

type DBRequestRecord = {
    id: number;
    url: string;
    method: string;
    payload: string;
};

export const savePayload = (event: ExtendableMessageEvent): void => {
    if (URLS.includes(event.data.url) && event.data.payload) {
        // receives payload from API
        payload = event.data.payload;
    }
};

export const fetchRequest = (event: FetchEvent): void => {
    const url = event.request.url.replace(API_URL.href, '');
    if (URLS.includes(url)) {
        event.respondWith(
            fetch(event.request.clone()).catch(() => {
                saveRequests(event.request.clone());
            }) as Promise<Response>
        );
    }
};

export const onOnlineEvent = (event: SyncEvent): void => {
    if (event.tag === SYNC_NAME) {
        event.waitUntil(sendRequestsFromDB());
    }
};

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
        .then((registration) => registration.sync.register(SYNC_NAME))
        .catch((error) => {
            // eslint-disable-next-line no-console
            console.error('[Service worker | navigator.serviceWorker.ready | error]  ', error);
        });
}

const saveRequests = (request: Request) => {
    getObjectStore(STORE_NAME, 'readwrite').add({
        url: request.url,
        payload,
        method: request.method
    });
};

const sendRequestsFromDB = () => {
    const req = getObjectStore(STORE_NAME).openCursor();
    const savedRequests: DBRequestRecord[] = [];
    req.onsuccess = async function sendRequestOnSuccess(this: IDBRequest<IDBCursorWithValue | null>): Promise<void> {
        const cursor = this.result;
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
