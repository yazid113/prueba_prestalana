import axios from 'axios';

const BASE_URL = `${import.meta.env.VITE_URL_BACKEND}`;
const BASE_URL_FAVORITE = `${import.meta.env.VITE_URL_BACKEND_FAVORITE}`;

export const axiosRequest = axios.create({
  baseURL: BASE_URL,
});

export const axiosRequestFavorites = axios.create({
  baseURL: BASE_URL_FAVORITE,
});
