import { addError, removeError } from './error';
import { SET_CURRENT_USER } from '../types';
import API from '../api';
import swal from "sweetalert";

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  user,
});

export const setToken = token => {
  API.setToken(token);
};

export const loginAction = (payload) => {
  return async dispatch => {
    try {
      const { token, ...user } = await API.call('post', `api/login`, payload);
      const b = await Promise.resolve(token)

      localStorage.setItem('jwtToken', b.token);
      API.setToken(b.token);
      dispatch(setCurrentUser(user));
      dispatch(removeError());
    } catch (err) {
      const { error } = err.response;
      swal({
        title: "Failed",
        text: "Unable to login, please check your details and try again",
        icon: "warning",
        dangerMode: true,
      })
      dispatch(addError(error));
    }
  }
}

export const registerAction = (payload) => {
  return async dispatch => {
    try {
      const { token, ...user } = await API.call('post', `api/register`, payload);

      const b = await Promise.resolve(token)
      localStorage.setItem('jwtToken', b.token);
      API.setToken(b.token);
      dispatch(setCurrentUser(user));
      dispatch(removeError());
    } catch (err) {
      const { error } = err.response;
      swal({
        title: "Failed",
        text: "Unable to register, please check your details and try again",
        icon: "warning",
        dangerMode: true,
      })
      dispatch(addError(error));
    }
  }
}

export const logout = () => {
  return async dispatch => {
    const { data } = await API.call('post', `api/logout`);
    localStorage.clear();
    API.setToken(null);
    dispatch(setCurrentUser({}));
    dispatch(removeError());
  };
};