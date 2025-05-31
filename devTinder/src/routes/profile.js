const express = require("express");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const { userAuth } = require("../middlewares/auth");
const { validateResetPassword } = require("../utils/validation");
const { userPublicData } = require("../utils/constant");

const profileRouter = express.Router();

// This middleware is used when param: id will present in the url
// profileRouter.param("/:id", async (req, res, next) => {
//   try {
//     const userId = req.params.id;
//     if (!userId) throw new Error("Parameter userId is not present");

//     const user = await User.findById(userId);
//     if (!user) throw new Error("User not found");
//     req.user = user;
//     next();
//   } catch (error) {
//     next(error);
//   }
// });

// API - /profile
profileRouter.get("/", userAuth, (req, res) => {
  //const cookie = req.cookies // if you want to access cookie you have to parse that using cookie-parser

  //This we can handle cookies without using cookie-parser, but cookie-parser is recommendable to user
  // const cookieHeader = req.headers.cookie  //THis is the other way to get the cookie
  // const cookies = {}
  // if(cookieHeader){
  //   cookieHeader.split(";").forEach(element => {
  //     const [name, value] = element.trim().split("=")
  //     cookies[name] = decodeURIComponent(value)
  //   });
  // }
  // console.log(cookies);

  try {
    const user = req.user;
    res.json({
      user: {
        _id:user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        age: user.age,
        gender: user.gender,
        about: user.about,
        photoUrl: user.photoUrl,
      },
    });
  } catch (error) {
    res.status(500).status(403).send("Something went wrong");
  }
});

//UPdate User API - /updateUser
profileRouter.put("/edit/:userId", userAuth, async (req, res) => {  
  const userId = req.params.userId;
  const dataToUpdate = req.body;
  const allowedUpdates = [
    "firstName",
    "lastName",
    "gender",
    "about",
    "skills",
    "photoUrl",
  ];
  const isUpdateAllowed = Object.keys(dataToUpdate).every((field) =>
    allowedUpdates.includes(field)
  );

  try {
    if (!userId) {
      throw new Error("Id is required");
    } else if (!isUpdateAllowed) {
      throw new Error("Update is not allowed");
    } else if (req.body.skills && req.body.skills.length > 4) {
      throw new Error("Skill length exceeds 4");
    }
    const user = await User.findByIdAndUpdate(userId, dataToUpdate, {
      // returnDocument:"before",
      returnOriginal: false,
      runValidators: true, // Use to validate
    }).select(userPublicData);
    if (!user) {
      res.status(404).send("User not found");
      return;
    }
    res.json({
      message: "Profile Updated Successfully",
      updatedData: user,
    });
  } catch (error) {
    console.log("error", error);
    res.status(400).send("something went wrong " + error);
  }
});

profileRouter.patch("/resetpassword", userAuth, async (req, res) => {
  try {
    validateResetPassword(req);
    const { _id, password } = req.user;
    const { newPassword, currentPassword } = req.body;
    const isCurrentPasswordValid = await bcrypt.compare(
      currentPassword,
      password
    );
    if (!isCurrentPasswordValid) {
      throw new Error("Current password is not correct");
    }
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await User.findByIdAndUpdate(_id, {
      password: hashedPassword,
    });
    res.json({ message: "Your password is updated successfully", id: _id });
  } catch (error) {
    console.log("Error: " + error);
    res.status(400).send("Something went wrong " + error.message);
  }
});

module.exports = profileRouter;
