import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "shoppingCart",
  initialState: { products: [] },
  reducers: {
    addProduct(state, action) {
      //{productId:1, qty:22}
      const productToAdd = action.payload;
      const isAlreadyInCart = state.products.some((item) => {
        return item.id === productToAdd.id;
      });
      if (isAlreadyInCart) {
        return state.products.map((item) => {
          if (item.id === productToAdd.id) {
            return { ...item, qty: item.qty + productToAdd.qty };
          }
          return item;
        });
      }
      state.products.push(productToAdd);
    },
    removeProduct(state, action) {
      const productToRemove = action.payload;
      state = state.products.map((item) => {
        if (item.id === productToRemove) {
          return { ...item, qty: item.qty - 1 };
        }
      });
      return state.filter((item) => item.qty > 0);
    },
  },
});
const { actions, reducer } = authSlice;
export const { addProduct, removeProduct } = actions;
export default reducer;
