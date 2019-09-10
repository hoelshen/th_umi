import axios from 'axios'
 
axios.defaults.baseURL = "http://localhost:3001/"//api前缀
 
 
const instance = axios.create({
  xsrfCookieName: 'xsrf-token'
});
 
instance.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});
 
instance.interceptors.response.use(function (response) {
  return response.data
}, function (error) {
  return Promise.reject(error);
});
export default instance;