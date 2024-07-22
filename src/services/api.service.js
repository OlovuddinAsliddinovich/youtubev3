import axios from "axios";
const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const RAPIDAPI_KEY = process.env.REACT_APP_PUBLIC_KEY;

const option = {
  params: {
    maxResults: 50,
  },
  headers: {
    "x-rapidapi-key": RAPIDAPI_KEY,
    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  },
};

export const ApiService = {
  async fetching(url) {
    const response = await axios.get(`${BASE_URL}/${url}`, option);
    return response.data;
  },
};
