import {fetchRequest, onOnlineEvent, savePayload} from './services/offlineRequests/offlineRequest';

export default null;
declare let self: ServiceWorkerGlobalScope;

self.addEventListener('install', () => {
    self.skipWaiting();
});

self.addEventListener('message', savePayload);

self.addEventListener('fetch', fetchRequest);

self.addEventListener('sync', onOnlineEvent);
