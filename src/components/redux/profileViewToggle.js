import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    toggle : false 
}

const profileView = createSlice({
name : "profileView",
initialState , 
reducers :{
     ChangePorfileView : (state) => {
        state.toggle = !state.toggle
    }
 }

})

  export const { ChangePorfileView } = profileView.actions
  export default profileView.reducer;

 