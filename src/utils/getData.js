import {getData, getNEOFeedAPIURL, getNEOLookupAPIURL} from "./helpers";
import {API_URL_NEO_FEED, API_URL_NEO_LOOKUP} from "./constant";

export const getNEOFeed = async (startDate, endDate) => {
    const url = getNEOFeedAPIURL(API_URL_NEO_FEED, startDate, endDate);
    const response = await getData(url);
    return response;
};

export const getNEOLookup = async (neoId) => {
    const url = getNEOLookupAPIURL(API_URL_NEO_LOOKUP, neoId);
    const response = await getData(url);
    return response;
}