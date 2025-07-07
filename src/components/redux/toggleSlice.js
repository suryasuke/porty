import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    toggle : true 
}

const createslice = createSlice({
name : "toggle",
initialState , 
reducers :{
     toggleUp : (state) => {
        state.toggle = !state.toggle
    }
 }

})

export const { toggleUp } = createslice.actions
export default createslice.reducer;

 