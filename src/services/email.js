import { APY_KEY, URL_BACK } from "../constants/routes";

/**
 * @param {object} requestBody
 */
export function sendEmail(requestBody) {
    const url = `${URL_BACK}/api/send-email?api_key=${APY_KEY}`
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
    });
}