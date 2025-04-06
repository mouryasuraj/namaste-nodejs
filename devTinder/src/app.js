const express = require("express");
require("dotenv").config();
const connectDB = require("./config/database");
const User = require("./models/user");

const app = express();
const PORT = process.env.PORT;

app.use(express.json()) /// It will convert the JSON request body into Javacript Object

app.post("/signup", async (req, res) => {
  const {body} = req;

  const user = new User(body);
  try {
    await user.save();
    res.json({
      message:"User created successfully",
      userDetails:{
        email:body.email
      }
    })
  } catch (error) {
    console.log("An error occured during saving the data to database", error);
    res.status(400).send("Something went wrong");
  }
});

//Connect DB
connectDB()
  .then(() => {
    console.log("Database connected successfully");
    app.listen(PORT, () => {
      console.log("Server is running on port: ", PORT);
    });
  })
  .catch((err) => {
    console.log("An error occured during connecting to database", err);
  });
