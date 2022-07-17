export const base_img_url = 'https://image.tmdb.org/t/p/original';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_TMDB_KEY;

export const fetchData = {
  fetchLatest: `${BASE_URL}/movie/latest?api_key=${API_KEY}`,
  fetchPopular: `${BASE_URL}/movie/popular?api_key=${API_KEY}`,
  fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`,
  fetchUpcoming: `${BASE_URL}/movie/upcoming?api_key=${API_KEY}`
};
