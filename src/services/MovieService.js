const axios = require("axios").default;
import {
  TMDB_BASE_URL,
  TMDB_API_KEY,
  TMDB_IMAGE_BASE_URL,
  ENDPOINTS,
  YOUTUBE_BASE_URL,
} from "../constants/Urls";
import LANGUAGES from "../constants/Languages";

const getNowPlayingMovies = () =>
  axios
    .create({
      baseURL: TMDB_BASE_URL,
      params: {
        api_key: TMDB_API_KEY,
      },
    })
    .get(ENDPOINTS.NOW_PLAYING_MOVIES);

const getUpcomingMovies = () =>
  axios
    .create({
      baseURL: TMDB_BASE_URL,
      params: {
        api_key: TMDB_API_KEY,
      },
    })
    .get(ENDPOINTS.UPCOMING_MOVIES);

const getMovieById = (movieId, append_to_response = "") =>
  axios
    .create({
      baseURL: TMDB_BASE_URL,
      params: {
        api_key: TMDB_API_KEY,
      },
    })
    .get(
      `${ENDPOINTS.MOVIE}/${movieId}`,
      append_to_response ? { params: { append_to_response } } : null
    );

const getAllGenres = () =>
  axios
    .create({
      baseURL: TMDB_BASE_URL,
      params: {
        api_key: TMDB_API_KEY,
      },
    })
    .get(ENDPOINTS.GENRES);

const getPoster = (path) => `${TMDB_IMAGE_BASE_URL}/original${path}`;

const getLanguage = (language_iso) =>
  LANGUAGES.find((language) => language.iso_639_1 === language_iso);

const getVideo = (key) => `${YOUTUBE_BASE_URL}?v=${key}`;

export {
  getNowPlayingMovies,
  getUpcomingMovies,
  getAllGenres,
  getMovieById,
  getPoster,
  getLanguage,
  getVideo,
};
