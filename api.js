import axios from "axios";

const ACCESS_KEY = '-EZGxItXGBUZ2lHczGywRuqelpVOrp-EJ7U9PkvOtxM'; 
const BASE_URL = 'https://api.unsplash.com';

export const fetchImages = async (query, page = 1) => {
  
    const response = await axios.get(`${BASE_URL}/search/photos`, {
      params: {
            query,
            page,  
            per_page: 12, 
            client_id: ACCESS_KEY,
      },
    });
    return response.data.results;
  
};