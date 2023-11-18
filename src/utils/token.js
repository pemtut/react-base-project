import { getFromLocalStorage, saveToLocalStorage } from './storage';

export const getToken = () => getFromLocalStorage('token');
export const setToken = (token) => saveToLocalStorage('token', token);
export const getRefreshToken = () => getFromLocalStorage('refresh-token');
export const setRefreshToken = (token) =>
  saveToLocalStorage('refresh-token', token);
