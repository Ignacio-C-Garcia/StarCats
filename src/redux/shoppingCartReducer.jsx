import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "shoppingCart",
  initialState: { products: [] },
  reducers: {
    addProduct(state, action) {
      //{productId:1, qty:22}
      const productToAdd = action.payload;
      const indexInCart = state.products.findIndex((item) => {
        return item.id === productToAdd.id;
      });
      if (indexInCart >= 0) {
        state.products[indexInCart].qty += productToAdd.qty;
      } else {
        state.products.push(productToAdd);
      }
    },
    removeProduct(state, action) {
      const productToRemove = action.payload.id;
      const newState = state.products.map((item) => {
        if (item.id === productToRemove) {
          return { ...item, qty: item.qty - 1 };
        }
        return item;
      });
      state.products = newState.filter((item) => item.qty > 0);
    },
  },
});
const { actions, reducer } = authSlice;
export const { addProduct, removeProduct } = actions;
export default reducer;
