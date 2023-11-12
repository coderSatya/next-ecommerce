import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: [],
  userInfo: null,
  orderData: [],
};

export const shoppingSlice = createSlice({
  name: "shopping",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.productData.find(
        (item) => item._id === action.payload._id
      );
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },
    increaseQuantity: (state, action) => {
      const existingProduct = state.productData.find(
        (item) => item._id === action.payload._id
      );
      existingProduct && existingProduct.quantity++;
    },
    decreaseQuantity: (state, action) => {
      const existingProduct = state.productData.find(
        (item) => item._id === action.payload._id
      );
      if (existingProduct.quantity === 1) {
        existingProduct.quantity == 1;
      } else {
        existingProduct && existingProduct.quantity--;
      }
    },
    deleteProduct: (state, action) => {
      state.productData = state.productData.filter(
        (item) => item._id !== action.payload
      );
    },
    resetCart: (state, action) => {
      state.productData = [];
    },
    addUser: (state, action) => {
      console.log(action.payload, "900");
      state.userInfo = action.payload;
    },
    deleteUser: (state, action) => {
      state.userInfo = null;
    },
  },
  extraReducers: {},
});
export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  deleteProduct,
  resetCart,
  addUser,
  deleteUser,
} = shoppingSlice.actions;
export default shoppingSlice.reducer;
