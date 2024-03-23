import axios from 'axios';

import { IPalette } from '../types';

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

axios.interceptors.response.use(
  response => response,
  error => {
    if (axios.isAxiosError(error)) {
      return Promise.reject(error.message);
    } else {
      return Promise.reject('Failed to fetch data! Try again!');
    }
  }
);

export const getAllPalettes = async () => {
  return (await axios.get<IPalette[]>('api/palettes')).data;
};

export const getPaletteById = async (id: Pick<IPalette, '_id'>) => {
  return (await axios.get<IPalette>(`api/palettes/${id}`)).data;
};
