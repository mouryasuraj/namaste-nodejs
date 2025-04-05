const express = require("express");
require("dotenv").config();
const connectDB = require("./config/database");
const User = require("./models/user");

const app = express();
const PORT = process.env.PORT;

app.use(express.json())

app.post("/signup", async (req, res) => {
  const reqBody = {
    firstName: "Suraj",
    lastName: "Mourya",
    email: "suraj@dmeo.com",
    password: "123123123",
    age: 24,
    gender: "Male",
  };

  const user = new User(reqBody);
  try {
    await user.save();
    res.send("User created successfully");
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
