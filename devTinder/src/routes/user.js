const express = require("express");
const User = require("../models/user");
const { userAuth } = require("../middlewares/auth");
const ConnectionRequest = require("../models/connectionRequest");

const userRouter = express.Router();

// Get one user API - /user
userRouter.get("/", async (req, res) => {
  const email = req.query.email;
  try {
    const users = await User.findOne({ email }).sort({ _id: -1 }); //if you pass id:-1 then it will give the latest created one and if id:1 then the old one
    if (!users) {
      res.status(404).send(`User not found with email: ${email}`);
      return;
    }
    res.json(users);
  } catch (error) {
    console.log("an error occured during getting all the users", error);
    res.status(500).send("Someting went wrong");
  }
});

// Feed API - /feed
userRouter.get("/feed", userAuth, async (req, res) => {
  try {
    const users = await User.find({});
    if (users.length === 0) {
      res.send(`Feed is empty`);
      return;
    }
    res.json(users);
  } catch (error) {
    console.log("an error occured during getting all the users", error);
    res.status(500).send("Someting went wrong");
  }
});

//Delete User API - /deleteUser
userRouter.delete("/deleteUser", userAuth, async (req, res) => {
  const userId = req.query.userId;
  if (!userId) {
    res.status(400).send("User id not found");
    return;
  }
  try {
    // await User.findByIdAndDelete(userId)
    await User.findByIdAndDelete({ _id: userId }); // The above one is the shorthand of this method
    res.send("User deleted successfully");
  } catch (error) {
    console.log("error", error);
    res.status(500).send("Something went wrong");
  }
});

//Get all Connections
userRouter.get("/connections", userAuth, async (req, res) => {
  try {
    const loggedInUser = req.user;

    const allAcceptedConnections = await ConnectionRequest.find({
      $or: [
        { toUserId: loggedInUser._id, status: "accepted" },
        { fromUserId: loggedInUser._id, status: "accepted" },
      ],
    })
      .populate("fromUserId", "firstName lastName age about photoUrl")
      .populate("toUserId", "firstName lastName age about photoUrl");



    if (allAcceptedConnections.length === 0) {
      res.json({ message: "No Connection made" });
    } else {
      const filteredData = allAcceptedConnections.map(data =>{
        
        if(data.fromUserId._id.toString()===loggedInUser._id.toString()){
          return data.toUserId
        }else{
          return data.fromUserId
        }
      })
      res.json({
        message: "Accepted Connections Request",
        data: filteredData,
      });
    }
  } catch (error) {
    console.log("Something went wrong:", error.message);
    res.status(400).json({ message: "Something went wrong" });
  }
});

//Get all pending connection request
userRouter.get("/requests", userAuth, async (req, res) => {
  try {
    const loggedInUser = req.user;

    const allConnectionRequests = await ConnectionRequest.find({
      toUserId: loggedInUser._id,
      status: "interested",
    }).populate("fromUserId", "firstName lastName age gender about skills");
    // }).populate("fromUserId", ["firstName","lastName","age","gender","about","skills"])

    if (allConnectionRequests.length === 0) {
      res.json({ message: "No request is found" });
    } else {
      res.json({ message: "Connections", data: allConnectionRequests });
    }
  } catch (error) {
    console.log("Something went wrong: ", error.message);
    res.status(400).json({ message: "Something went wrong" });
  }
});

module.exports = userRouter;
