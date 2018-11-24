import {
    defaultHeaders,
    apiCredentials,
    apiEndpoint
} from '../helpers/constants';

export const getRoutes = async () => {
    let response = await fetch(
        `${apiEndpoint}`,
        {
            method: "GET",
            headers: defaultHeaders,
            mode: 'no-cors'
        }
    );
    let result = await response;
    return result;
};

export const getApiKey = async () => {
    let response = await fetch(
        `https://api-cert.belavia.by/token`,
        {
            method: "POST",
            headers: defaultHeaders,
            body: apiCredentials,
            mode: 'no-cors',
        }
    );
    let result = await response;
    return result;
};

export const getFlightData = async (options) => {
    const apiKey = await getApiKey();
    let response = await fetch(
        `${apiEndpoint}/search/outbound`,
        {
            method: "POST",
            headers: Object.assign(defaultHeaders, {
                "Authorization": `Bearer ${apiKey}`,
            }),
            body: options,
            mode: 'no-cors'
        }
    );
    let result = await response.json();
    return result;
};

export const getFares = (destination) => {
    return fetch(`https://farefinder.herokuapp.com/search/fare`, {
        method: "POST",
        body: JSON.stringify({
            "date": {
                "start": "2019-01-01"
            },
            "origin": "MSQ",
            "destination": destination
        }),
        
    })
    .then(res => res.json());
}