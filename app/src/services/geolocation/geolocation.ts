import axios from 'axios';

import type {AppPosition} from './types';

const GEOLOCATION_API_URL = new URL('https://api.bigdatacloud.net/');
const ax = axios.create({baseURL: GEOLOCATION_API_URL.href});

export const GeolocationApiGet = async (): Promise<AppPosition | undefined> => {
    try {
        const currentPosition = await getCurrentPosition();
        const city = await GeolocationApiGetCity(currentPosition.coords);

        return {
            city
        };
    } catch (err) {
        // eslint-disable-next-line no-console
        console.error('[GeolocationApi error] ', ` (${err.code}): ${err.message}`);

        return undefined;
    }
};

const getCurrentPosition = (): Promise<Position> =>
    new Promise((success, error) =>
        navigator.geolocation.getCurrentPosition(success, error, {
            timeout: 10000
        })
    );

export const GeolocationApiGetCity = async (coords: Coordinates): Promise<string | undefined> => {
    const params = {
        latitude: coords.latitude,
        longitude: coords.longitude,
        localityLanguage: 'en'
    };
    try {
        const response = await ax.get('data/reverse-geocode-client', {params});
        if (response.status === 200 && response.data.city) {
            return response.data.city;
        }
    } catch (err) {
        // eslint-disable-next-line no-console
        console.log('[GeolocationApiGetCity error] ', ` (${err.code}): ${err.message}`);
    }

    return undefined;
};
