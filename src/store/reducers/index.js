import { combineReducers } from 'redux';

import error from './error';
import auth from './auth';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "persistedStore",
  storage
};

const persist = (persistConfig, reducer) => {
  persistReducer({ ...persistConfig, storage }, reducer);
};

export default combineReducers({
  persistedStore: persistReducer(persistConfig, auth),
  error,
});