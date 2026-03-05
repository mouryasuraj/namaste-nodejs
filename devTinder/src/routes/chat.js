const express = require('express')
const Chat = require('../models/chat')
const { userAuth } = require('../middlewares/auth')

const chatRouter = express.Router()

chatRouter.post('/getallchat', userAuth, async (req,res)=>{
    try {
        if(!req.body){
            throw new Error("Request body is not present")
        }
        const {userId, toUserId} = req.body
        let chats = await Chat.findOne({
            participants:{$all:[userId, toUserId]}
        }).populate({
            path:"messages.senderId",
            select:"photoUrl"
        })

        
        if(!chats){
            chats = new Chat({
                participants:[userId, toUserId],
                messages:[]
            })
            await chats.save()
        }

        
        res.json({message:"success",data:chats})
        
    } catch (error) {
        console.error("Something went wrong: ", error);
        res.json({message:"Something went wrong"})
        
    }
})


module.exports = chatRouter