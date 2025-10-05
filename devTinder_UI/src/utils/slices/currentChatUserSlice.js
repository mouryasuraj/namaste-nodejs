import { createSlice } from "@reduxjs/toolkit"

const currentChatUserSlice = createSlice({
    name:'currentChatUser',
    initialState:null,
    reducers:{
        addCurrChatUser:(state, actions)=> actions.payload,
        removeCurrChatUser:()=>{
            return null
        }
    }
})

export const {addCurrChatUser, removeCurrChatUser} = currentChatUserSlice.actions

export default currentChatUserSlice.reducer