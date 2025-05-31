import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../slices/userSlice.js'
import feedReducer from "../slices/feedSlice.js"

const appStore = configureStore({
    reducer:{
        user:userReducer,
        feed:feedReducer
    }
})

export default appStore