import {API_KEY} from "./constant";
import axios from "axios";
import {toast} from 'react-hot-toast';

// Helper Function to make a GET call to the API
export const getData = async (url) => {
    try {
        const response = await axios.get(url);
        return response;
    } catch (error) {
        toast.error("Error in fetching data");
        return {
            isError: true,
            response: {}
        };
    }
};

// Function to get the API URL
export const getNEOFeedAPIURL = (url, startDate, endDate) => {
    return `${url}?api_key=${API_KEY}&start_date=${startDate}&end_date=${endDate}`;
}

export const getNEOLookupAPIURL = (url, id) => {
    return `${url}/${id}?api_key=${API_KEY}`;
}