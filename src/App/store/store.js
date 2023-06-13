import { configureStore } from "@reduxjs/toolkit"
import currentReducer from './currentSlice'

const store = configureStore({
    reducer:currentReducer,
    devTools:true
})

export default store