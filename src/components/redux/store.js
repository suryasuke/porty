import { configureStore } from "@reduxjs/toolkit";
import createslice from './toggleSlice'
import profileView from './profileViewToggle'

const store = configureStore({
    reducer:{
            toggle : createslice  , 
            profileView : profileView , 
    }
})

export default store ; 