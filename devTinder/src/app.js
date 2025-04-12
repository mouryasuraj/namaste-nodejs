const express = require("express");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const connectDB = require("./config/database");
const User = require("./models/user");
const { validateSignUpData, validateLoginData } = require("./utils/validation");
const { userAuth } = require("./middlewares/auth");

const app = express();
const PORT = process.env.PORT;
const SECRETKEY = process.env.SECRETKEY;

app.use(express.json()); /// It will convert the JSON request body into Javacript Object
app.use(cookieParser());

// API - /signup
app.post("/signup", async (req, res) => {
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
    await user.save();
    res.json({
      message: "User created successfully",
      userDetails: {
        email: email,
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

// API - /login
app.post("/login", async (req, res) => {
  try {
    validateLoginData(req);

    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("Invalid Credentials");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error("Invalid Credentials");
    } else {
      const userPayload = {
        email: user.email,
        gender: user.gender,
        age: user.age,
        photoUrl: user.photoUrl,
      };
      const token = jwt.sign(userPayload, SECRETKEY, { expiresIn: "2 days" });
      res.cookie("token", token, { httpOnly: true, secure: false, expires:new Date(Date.now()+300000) });
      res.send("logged in successfully.....");
    }
  } catch (error) {
    console.log("Error", error.message);
    res.status(500).send("Something went wrong " + error.message);
  }
});

// API - /profile
app.get("/profile", userAuth, (req, res) => {
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
    res.json(user);
  } catch (error) {
    res.status(500).status(403).send("Something went wrong");
  }
});

// Get one user API - /user
app.get("/user", async (req, res) => {
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
app.get("/feed", userAuth, async (req, res) => {
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
app.delete("/deleteUser", async (req, res) => {
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

//UPdate User API - /updateUser
app.patch("/updateUser", async (req, res) => {
  const userId = req.query.userId;
  const dataToUpdate = req.body;
  const allowedUpdates = ["firstName", "lastName", "gender", "about", "skills"];
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
    });
    if (!user) {
      res.status(404).send("Id not found");
      return;
    }
    res.json({
      message: "User Updated Successfully",
      updatedData: user,
    });
  } catch (error) {
    console.log("error", error);
    res.status(400).send("something went wrong " + error);
  }
});

//Connect DB
connectDB()
  .then(async (res) => {
    console.log("Database connected successfully");
    const indxes = await User.collection.indexes();
    console.log(indxes);

    app.listen(PORT, () => {
      console.log("Server is running on port: ", PORT);
    });
  })
  .catch((err) => {
    console.log("An error occured during connecting to database", err);
  });
