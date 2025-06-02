import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../slices/userSlice.js'
import feedReducer from "../slices/feedSlice.js"
import loadingReducer from "../slices/loadingSlice.js"
import connectionsReducer from "../slices/connectionSlice.js"

const appStore = configureStore({
    reducer:{
        user:userReducer,
        feed:feedReducer,
        loading:loadingReducer,
        connections:connectionsReducer,
    }
})

export default appStore