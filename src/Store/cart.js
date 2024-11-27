import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{counter:0},
    reducers:{
    onhandleCounter:(state,action)=>{
        state.counter++;
    }
}
})

export const cartAction=cartSlice.actions;
export default cartSlice.reducer;