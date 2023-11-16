import { getFromLocalStorage } from './storage';

export const getToken = () => getFromLocalStorage('token');
