
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { persistStore, persistReducer } from 'redux-persist'

import  authReducer from 'redux/auth/auth';
import  counterReducer from 'redux/counter/counterSlice';

const rootReducer = combineReducers({
   authReducer,
   counterReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ["authReducer"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

const persistor = persistStore(store)

export { store, persistor }

