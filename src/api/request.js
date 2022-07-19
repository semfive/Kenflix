export const base_img_url = 'https://image.tmdb.org/t/p/original';

export const BASE_URL = 'https://api.themoviedb.org/3';
export const API_KEY = '0b33eb3e3c720c76ff1d4df99841953b';

export const fetchData = {
  fetchLatest: `${BASE_URL}/movie/latest?api_key=${API_KEY}`,
  fetchPopular: `${BASE_URL}/movie/popular?api_key=${API_KEY}`,
  fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`,
  fetchUpcoming: `${BASE_URL}/movie/upcoming?api_key=${API_KEY}`,
  fetchNowPlaying: `${BASE_URL}/movie/now_playing?api_key=${API_KEY}`
};
