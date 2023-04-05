import { configureStore } from "@reduxjs/toolkit";

import counterSlice from './counterSlice'

const store = configureStore({
    reducer : {
        post : counterSlice    
    } 
})

export default store 