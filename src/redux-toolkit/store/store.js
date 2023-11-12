import { configureStore } from "@reduxjs/toolkit";
import shoppingReducer from "../slices/shoppingSlices";
import logger from "redux-logger";

 const store = configureStore({
    
  reducer: {
    shopping:shoppingReducer
  }
 
});
export default store