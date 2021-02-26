const DB_NAME = 'cog';
const DB_VERSION = 11;
let db: IDBDatabase;

export const getObjectStore = (
    storeName: string,
    mode: 'readwrite' | 'readonly' | 'versionchange' | undefined = 'readwrite'
): IDBObjectStore => db.transaction([storeName], mode).objectStore(storeName);

export const openDatabase = (storeName: string): void => {
    const indexedDBOpenRequest = indexedDB.open(DB_NAME, DB_VERSION);
    indexedDBOpenRequest.onsuccess = function onSuccess(this: IDBRequest<IDBDatabase>) {
        db = this.result;
    };

    indexedDBOpenRequest.onupgradeneeded = function onUpgrade(this: IDBOpenDBRequest) {
        this.result.createObjectStore(storeName, {autoIncrement: true, keyPath: 'id'});
    };
};
