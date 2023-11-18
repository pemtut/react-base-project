import { getToken } from './token';

const createAuthCycle = (instance) => {
  instance.interceptors.request.use(
    (config) => {
      const token = getToken();
      if (config && token) config.headers.Authorization = `Bearer ${token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      switch (error.response.statue) {
        case 401: //Unauthorized
          break;
        case 403: //Forbidden
          break;
        default:
          break;
      }
      return Promise.reject(error);
    }
  );
};

export default createAuthCycle;
