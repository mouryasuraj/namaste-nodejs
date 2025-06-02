import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name: "requests",
  initialState: [],
  reducers: {
    addRequests: (state, action) => action.payload,
    removeRequest: () => [],
  },
});

export const { addRequests, removeRequest } = requestSlice.actions;
export default requestSlice.reducer;
