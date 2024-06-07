export const APP_KEY = '0b352e317a9aa53a0200acb11a697fc1'
export const BASE_URL = 'https://api.themoviedb.org/3';
export const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYjM1MmUzMTdhOWFhNTNhMDIwMGFjYjExYTY5N2ZjMSIsInN1YiI6IjY0YmY0N2FkYjMzMTZiMDBmZjYyMTE2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wpePLM8cXEHNV8IsuMqH8rEDQ8gfEkKcjHgFiAzE9cg'

export const getMovies = (type) => tmdb.get(`/movie/${type}`);
export const getTVShows = (type) => tmdb.get(`/tv/${type}`);
export const search = (query, type) => tmdb.get(`/search/${type}`, { params: { query } });
export const getMovieDetails = (id) => tmdb.get(`/movie/${id}`);