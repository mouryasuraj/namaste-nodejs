

const express = require('express')
const { userAuth } = require('../middlewares/auth')

const paymentRouter = express.Router()

paymentRouter.post('createOrder', userAuth, (req,res)=>{
    try {
        
    } catch (error) {
        console.log("an error occured creating order ", error)
    }
})

module.exports = paymentRouter