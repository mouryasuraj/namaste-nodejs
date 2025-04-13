const express = require("express");
const User = require("../models/user");
const { userAuth } = require("../middlewares/auth");

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
userRouter.delete("/deleteUser", async (req, res) => {
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

module.exports = userRouter;
