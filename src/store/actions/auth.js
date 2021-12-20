import { addError, removeError } from './error';
import { SET_CURRENT_USER } from '../types';
import API from '../api';

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  user,
});

export const setToken = token => {
  API.setToken(token);
};

export const logout = () => {
  return dispatch => {
    localStorage.clear();
    API.setToken(null);
    dispatch(setCurrentUser({}));
    dispatch(removeError());
  };
};