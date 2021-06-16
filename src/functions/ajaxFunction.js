import axios from "axios";

import {API_ERROR_RESPONSE_STRING, API_SUCCESS_RESPONSE_STRING} from "../constants/apiContants";

// Emit GET request to API and format response
export function apiGetRequest(url) {
    return new Promise((resolve, reject) => {
        axios.get(url)
            .then(res => {
                const apiResponse = res.data;
                (apiResponse.status === API_SUCCESS_RESPONSE_STRING) && resolve(apiResponse);
                (apiResponse.status === API_ERROR_RESPONSE_STRING) && reject(apiResponse.message);
                reject("Unknown error");
            })
            .catch(e => {
                reject(e.message);
                if(process.env.NODE_ENV !== 'production') console.log({e});
            })
    });
}