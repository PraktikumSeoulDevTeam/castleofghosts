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

export const GeolocationApiGetCity = (geoPos: GeolocationPosition): string => `${geoPos.coords.longitude}`;
