const express = require("express");
const bcrypt = require("bcrypt");
const {
  validateSignUpData,
  validateLoginData,
} = require("../utils/validation");
const User = require("../models/user");

const authRouter = express.Router();

authRouter.post("/signup", async (req, res) => {
  try {
    //Validate the request body
    validateSignUpData(req);

    const { firstName, lastName, email, password, age, gender, photoUrl } =
      req.body;

    //Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);

    const user = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      age,
      gender,
      photoUrl,
    });
    const savedUser = await user.save();

    const token =await savedUser.getJWT();

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      expires: new Date(Date.now() + 3000000),
    });

    res.json({
      message: "User created successfully",
      user: {
        _id: savedUser._id,
        firstName: savedUser.firstName,
        lastName: savedUser.lastName,
        age: savedUser.age,
        gender: savedUser.gender,
        about: savedUser.about,
        photoUrl: savedUser.photoUrl,
      },
    });
  } catch (error) {
    console.log("An error occured during saving the data to database", error);
    //Email Already Exist
    if (error.code === 11000) {
      res.status(409).send("Email already exists");
      return;
    }
    res.status(400).send("Error: " + error.message);
  }
});

authRouter.post("/login", async (req, res) => {
  try {
    validateLoginData(req);

    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("Invalid Credentials");
    }
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      throw new Error("Invalid Credentials");
    } else {
      const token = await user.getJWT();
      res.cookie("token", token, {
        httpOnly: true,
        secure: false,
        expires: new Date(Date.now() + 3000000),
      });
      res.json({
        message: "loggedIn successfully",
        user: {
          _id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          age: user.age,
          gender: user.gender,
          about: user.about,
          photoUrl: user.photoUrl,
        },
      });
    }
  } catch (error) {
    console.log("Something went wrong", error.message);
    res.status(400).json({ message: error.message });
  }
});

authRouter.post("/logout", (req, res) => {
  try {
    // res.cookie("token", null, {expires:new Date(Date.now())}) //we can also do this, it will set token to null and expires immediately
    // res.send("Logged out successfully")

    res.clearCookie("token").status(200).send("Logged out successfully");
  } catch (error) {
    console.log("Error: " + error);
    res.status(400).send("Somehting went wrong " + error.message);
  }
});

module.exports = authRouter;
