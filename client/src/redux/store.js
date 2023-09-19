import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice';
import cartReducer from './cart/cartSlice'
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import persistStore from 'redux-persist/es/persistStore';

const reducers = combineReducers({
  user: userReducer,
  cart: cartReducer
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['cart'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);




