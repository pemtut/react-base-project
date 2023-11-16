//Session storage
export const saveToSessionStorage = (key, value) =>
  sessionStorage.setItem(key, value);
export const getFromSessionStorage = (key) => sessionStorage.getItem(key);
export const removeFromSessionStorage = (key) => sessionStorage.removeItem(key);
export const removeAllSessionStorage = () => sessionStorage.clear();
//Local storage
export const saveToLocalStorage = (key, value) =>
  localStorage.setItem(key, value);
export const getFromLocalStorage = (key) => localStorage.getItem(key);
export const removeFromLocalStorage = (key) => localStorage.removeItem(key);
export const removeAllLocalStorage = () => localStorage.clear();
