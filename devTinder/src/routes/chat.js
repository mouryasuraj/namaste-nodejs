const express = require('express')
const Chat = require('../models/chat')

const chatRouter = express.Router()

chatRouter.post('/getallchat', async (req,res)=>{
    try {
        if(!req.body){
            throw new Error("Request body is not present")
        }
        const {userId, toUserId} = req.body
        const chats = await Chat.findOne({
            participants:{$all:[userId, toUserId]}
        })
        
        const messages = chats ? chats.messages : []
        
        res.json({message:"success",messages})
        
    } catch (error) {
        console.error("Something went wrong: ", error);
        res.json({message:"Something went wrong"})
        
    }
})


module.exports = chatRouter