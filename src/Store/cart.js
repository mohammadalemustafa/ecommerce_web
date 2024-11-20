import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
const cartSlice = createSlice({
  name: "cart",
  initialState: { cartQty: 0, cartData: [],wishlistdata:[],Wqty:0},
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
addAtWishlist:(state,action)=>{
const Wproduct=action.payload;
const isExistingProduct=state.wishlistdata.find((it)=>it.id===Wproduct.id);
if(isExistingProduct){
Swal.fire("product already added to wishlist");
}
else{
  state.wishlistdata=[...state.wishlistdata,Wproduct];
state.Wqty++;
}
}
  },
});
export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
