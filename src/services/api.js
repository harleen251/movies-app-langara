import axios from 'axios';
import { APP_KEY, BASE_URL } from '../config/apiConfig';
import qs from 'qs';

export const getMovies = async (category) => {
  const url = `${BASE_URL}/movie/${category}`;

  try {
    const params = {
      api_key: APP_KEY,
    };

    const movieAxios = axios.create({
      paramsSerializer: params => qs.stringify(params, { arrayFormat: 'repeat' })
    });

    const response = await movieAxios.get(url, { params });

    return response.data.results;
  } catch (error) {
    throw error;
  }
};

export const searchMovies = async (searchTerm, searchType) => {
  const url = `${BASE_URL}/search/${searchType}`;

  console.log("url is ", url);

  try {
    const params = {
      api_key: APP_KEY,
      query: searchTerm,
    };

    const movieAxios = axios.create({
      paramsSerializer: params => qs.stringify(params, { arrayFormat: 'repeat' })
    });

    const response = await movieAxios.get(url, { params });

    return response.data.results;
  } catch (error) {
    throw error;
  }
};

export const getTVShows = async (category) => {
  const url = `${BASE_URL}/tv/${category}`;

  try {
    const params = {
      api_key: APP_KEY,
    };

    const tvAxios = axios.create({
      paramsSerializer: params => qs.stringify(params, { arrayFormat: 'repeat' })
    });

    const response = await tvAxios.get(url, { params });

    return response.data.results;
  } catch (error) {
    throw error;
  }
};
