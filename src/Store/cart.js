import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cartQty: 0, cartData: [] },
  reducers: {
    onAddItem: (state, action) => {
      const product = action.payload;

      const isExistingProduct = state.cartData.find((it) => it.id === product.id);

      if (isExistingProduct) {
        isExistingProduct.qty = isExistingProduct.qty + 1;
      } else {
        state.cartQty++;
        state.cartData = [...state.cartData, { ...product, qty: 1 }];
      }
    },

    onRemoveItem: (state, action) => {
      const productId = action.payload;

      const isExistingProduct = state.cartData.filter((it) => it.id !== productId);
      state.cartQty--;
      state.cartData = [...isExistingProduct];
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
