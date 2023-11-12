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
      };
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
  },
  extraReducers: {},
});
export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  deleteProduct,
  resetCart,
} = shoppingSlice.actions;
export default shoppingSlice.reducer;