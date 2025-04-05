const express = require("express");
require("dotenv").config();
const connectDB = require("./config/database");
const User = require("./models/user");
const Kitten = require("./models/kitten");

const app = express();
const PORT = process.env.PORT;

const getName = async () =>{
    const silence = new Kitten({name:"Suraj"})
    await silence.save()
    silence.speak()
}
getName()


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
