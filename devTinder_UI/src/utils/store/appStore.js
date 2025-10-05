import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../slices/userSlice.js'
import feedReducer from "../slices/feedSlice.js"
import loadingReducer from "../slices/loadingSlice.js"
import connectionsReducer from "../slices/connectionSlice.js"
import requestsReducer from '../slices/requestSlice.js'
import currentChatUserReducer from '../slices/currentChatUserSlice.js'

const appStore = configureStore({
    reducer:{
        user:userReducer,
        feed:feedReducer,
        loading:loadingReducer,
        connections:connectionsReducer,
        requests:requestsReducer,
        currentChatUser:currentChatUserReducer
    }
})

export default appStore