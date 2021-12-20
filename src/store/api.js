import axios from 'axios';

let appURI = process.env.REACT_APP_URL_DEVELOPMENT

export const setToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

export const call = async (method, path, data) => {
  const response = await axios[method](`${appURI}/${path}`, data);
  return response.data;
};

export default { setToken, call };