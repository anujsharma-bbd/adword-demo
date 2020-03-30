export const setStorage = (key, data) => {
   localStorage.setItem(key, JSON.stringify(data));
}
export const getStorage = (key) => {
   let data = localStorage.getItem(key);
   return data && data !== 'undefined' ? JSON.parse(data) : null;
}