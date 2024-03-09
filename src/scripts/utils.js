//This defalt id points to the first video id from API
export const BRAINFLIX_DEFAULT_VIDEO_ID = "84e96018-4022-434e-80bf-000ce4cd12b8";

//Back-End API URL to fetch videos data 
export const BRAINFLIX_API_URL="http://127.0.0.1:8080";


/**
 * Added to covert date to human readable format eg. "10 minutes ago" or "3 days ago"
 * @param {*} date 
 * @returns 
 */
function formatLocaleDate(timestamp) {

    const seconds = Math.floor((new Date() - timestamp) / 1000);

    let interval = Math.floor(seconds / 31536000);
    if (interval >= 1) {
        return interval + " year" + (interval > 1 ? "s" : "") + " ago";
    }

    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) {
        return interval + " month" + (interval > 1 ? "s" : "") + " ago";
    }

    interval = Math.floor(seconds / 86400);
    if (interval >= 1) {
        return interval + " day" + (interval > 1 ? "s" : "") + " ago";
    }

    interval = Math.floor(seconds / 3600);
    if (interval >= 1) {
        return interval + " hour" + (interval > 1 ? "s" : "") + " ago";
    }

    interval = Math.floor(seconds / 60);
    if (interval >= 1) {
        return interval + " minute" + (interval > 1 ? "s" : "") + " ago";
    }

    return Math.floor(seconds) + " second" + (Math.floor(seconds) > 1 ? "s" : "") + " ago";
}

export default formatLocaleDate;