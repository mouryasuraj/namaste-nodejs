const { userAuth } = require("../middlewares/auth.js");

const express = require("express");
const User = require("../models/user.js");
const { validateSendConnectionData, validateReviewRequestBody } = require("../utils/validation.js");
const ConnectionRequest = require("../models/connectionRequest.js");

const requestRouter = express.Router();

requestRouter.post("/send/:status/:toUserId", userAuth, async (req, res) => {
  try {
    //Validate data
    validateSendConnectionData(req);
    const fromUserId = req.user._id;
    const toUserId = req.params.toUserId;
    const status = req.params.status;

    // Check to user exist in DB or not
    const toUser = await User.findById(toUserId)
    if(!toUser){
        return res.status(404).json({message:"toUser is not found"})
    }

    // Check connection is already sent
    const isExistingConnection = await ConnectionRequest.findOne({
        $or:[
            {fromUserId, toUserId},
            {fromUserId:toUserId, toUserId:fromUserId}
        ]
    })
    if(isExistingConnection){
        throw new Error("Connection already exists")
    }

    // Add connection in DB
    const connectionRequest = new ConnectionRequest({
      fromUserId,
      toUserId,
      status,
    });

    const requestData = await connectionRequest.save()
    res.json({
        message:`${req.user.firstName} is ${status}${status==="interested" ? " in" : ""} ${toUser.firstName}`,
        data:requestData
    })

  } catch (error) {
    console.log("Something went wrong : ", error);
    res.status(500).send("Something went wrong " + error.message);
  }
});


requestRouter.post("/review/:status/:requestId", userAuth, async (req,res)=>{
  try {
    validateReviewRequestBody(req)
    const loggedInUser = req.user
    const {status, requestId} = req.params

    const isConnectionExist =await ConnectionRequest.findOne({
      _id:requestId,
      toUserId:loggedInUser._id,
      status:"interested"
    })

    if(!isConnectionExist){
      return res.status(404).json({message:"Connection request not found"})
    }

    isConnectionExist.status = status
    const acceptedUser = await isConnectionExist.save()

    res.json({message:"Connection request "+status+" successfully", acceptedUser})


  } catch (error) {
      console.log("Something went wrong: ", error)
      res.status(400).json({message:"Something went wrong"})
  }
})


module.exports = requestRouter;
