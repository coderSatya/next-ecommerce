
import { configureStore } from "@reduxjs/toolkit";
 import shoppingReducer from './Slice/shoppingSlice'


export const store = configureStore({
  reducer: {
    shopping:shoppingReducer
  },
});