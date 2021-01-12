import axios from 'axios';

export const GeolocationApiGet = async (): Promise<GeolocationPosition> => {
    if (!navigator.geolocation) {
        // eslint-disable-next-line no-console
        console.log('[GeolocationApi error] ', ' browser does not support geolocation!');

        return null;
    }

    try {
        const res = await getGeolocation();

        return res;
    } catch (err) {
        // eslint-disable-next-line no-console
        console.log('[GeolocationApi error] ', ` (${err.code}): ${err.message}`);

        return null;
    }
};

const options: PositionOptions = {
    timeout: 10000
};

const getGeolocation = (): Promise<GeolocationPosition> =>
    new Promise((success, error) => navigator.geolocation.getCurrentPosition(success, error, options));

const GEOLOCATION_API_URL = new URL('https://api.bigdatacloud.net/');

export const GeolocationApiGetCity = async (geoPos: GeolocationPosition): Promise<void> => {
    const ax = axios.create({baseURL: GEOLOCATION_API_URL.href});
    const params = {
        latitude: geoPos.coords.latitude,
        longitude: geoPos.coords.longitude,
        localityLanguage: 'en'
    };
    try {
        const response = await ax.get('data/reverse-geocode-client', {params});
        if (response.status === 200 && response.data.locality) {
            return response.data.locality;
        }
    } catch (err) {
        // eslint-disable-next-line no-console
        console.log('[GeolocationApiGetCity error] ', ` (${err.code}): ${err.message}`);
    }

    return null;
};
