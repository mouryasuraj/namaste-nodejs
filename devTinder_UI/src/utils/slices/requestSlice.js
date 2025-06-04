import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name: "requests",
  initialState: [],
  reducers: {
    addRequests: (state, action) => action.payload,
    removeUserRequest:(state,action) => state.filter(data => data._id !== action.payload) , 
    clearRequests: () => [],
  },
});

export const { addRequests, removeUserRequest, clearRequests } = requestSlice.actions;
export default requestSlice.reducer;
