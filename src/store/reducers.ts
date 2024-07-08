import { combineReducers } from '@reduxjs/toolkit';
import authSlice from '../store/authSlice';
import dashboardSlice from './dashboardSlice';
import cartSlice from './cartSlice';
import favoriteSlice from './favoriteSlice';

const rootReducer = combineReducers({
  auth: authSlice,
  dashboard: dashboardSlice,
  cart: cartSlice,
  favorite: favoriteSlice,
});

export default rootReducer;
