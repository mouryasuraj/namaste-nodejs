const express = require("express");
const { userAuth } = require("../middlewares/auth");
const paymentInstance = require("../config/razorpay");
const Payment = require("../models/payment");
const getAmount = require("../utils/getAmount");
const generateRandomId = require("../utils/generateRandomId");
const { validateWebhookSignature } = require("razorpay/dist/utils/razorpay-utils");
const User = require("../models/user");

const paymentRouter = express.Router();

paymentRouter.post("/createOrder", userAuth, async (req, res) => {
  try {
    const loggedInUser = req.user;

    const { type } = req.query;

    const order = await paymentInstance.orders.create({
      amount: getAmount(type),
      currency: "INR",
      receipt: generateRandomId() + type + generateRandomId(),
      partial_payment: false,
      notes: {
        firstName: loggedInUser.firstName,
        lastName: loggedInUser.lastName,
        memeberShipType: type,
      },
    });
    const paymentPayload = {
      userId: loggedInUser._id,
      orderId: order.id,
      amount: order.amount,
      attempts: order.attempts,
      currency: order.currency,
      notes: order.notes,
      receipt: order.receipt,
      status: order.status,
    };
    // Store to database
    const payment = new Payment(paymentPayload);
    const createdOrderResponse = await payment.save();
    
    res.json({
      message: "order created successfully",
      order: createdOrderResponse,
    });
  } catch (error) {
    console.log("an error occured creating order", error);
    res.status(400).json({message:"Something went wrong"})
  }
});


// Razorpay webhook
paymentRouter.post("/webhook", async (req,res)=>{
    try {

        const reqBody = req.body
        const webHookSignature = req.get("X-Razorpay-Signature")
        const isWebhookValid = validateWebhookSignature(reqBody,webHookSignature,process.env.RAZORPAY_TEST_WEBHOOK_SECRET)

        console.log(req.body);
        console.log(isWebhookValid);
        // Changed Transaction status 
        const paymentDetails = reqBody.payload.payment.entity

        const payment = await Payment.findOne({orderId:paymentDetails.order_id})
        payment.status = paymentDetails.status

        // Mark User as Premium if payment successfyll
        
        if(reqBody.event==="payment.captured"){
            const user = await User.findById({_id:payment.userId})
            user.isPremium = true 
            user.memberShipType = payment.memeberShipType
        }
        // if(reqBody.event==="payment.failed"){

        // }
        

        //Send response back to razorpay
        res.json({message:"Webhook received successfully"})
        
    } catch (error) {
        console.log("an error occured in webhook: ", error)
        res.status(400).json({message:"Something went wrong"})
    }
})



module.exports = paymentRouter;
