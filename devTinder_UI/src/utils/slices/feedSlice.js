import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
    name:'feed',
    initialState:[],
    reducers:{
        addFeed:(state, action) => action.payload,
        removeFeed:(state,action) => state.filter(data => data._id !== action.payload),
        clearFeed:() => []
    }
})

export const {addFeed, removeFeed, clearFeed} = feedSlice.actions

export default feedSlice.reducer