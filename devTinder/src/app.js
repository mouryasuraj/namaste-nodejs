const express = require("express");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const connectDB = require("./config/database");
const User = require("./models/user");
const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const userRouter = require("./routes/user");
const requestRouter = require("./routes/request");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT;
const origin = process.env.ORIGIN;

app.use(cors({
  origin: origin,
  credentials: true,
  methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json()); /// It will convert the JSON request body into Javacript Object
app.use(cookieParser());


app.use("/auth", authRouter);
app.use("/profile", profileRouter);
app.use("/user", userRouter);

console.log("before");
app.use("/request", requestRouter);
console.log("after");

//Connect DB
connectDB()
  .then(async (res) => {
    console.log("Database connected successfully");
    const indxes = await User.collection.indexes();
    // console.log(indxes);

    app.listen(PORT, () => {
      console.log("Server is running on port: ", PORT);
    });
  })
  .catch((err) => {
    console.log("An error occured during connecting to database", err);
  });
