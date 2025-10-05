const express = require("express");
const http = require('http')
const cookieParser = require("cookie-parser");
require("dotenv").config();
const connectDB = require("./config/database");
const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const userRouter = require("./routes/user");
const requestRouter = require("./routes/request");
const cors = require("cors");
const paymentRouter = require("./routes/payment.js");
const initializeSocket = require("./config/socket.js");
const chatRouter = require("./routes/chat.js");
require("../src/utils/cronjob.js")

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
app.use("/request", requestRouter);
app.use("/payment", paymentRouter);
app.use("/chat", chatRouter);

// Socket Connection
const server = http.createServer(app)
initializeSocket(server)


//Connect DB
connectDB()
  .then(async (res) => {
    console.log("Database connected successfully");
    server.listen(PORT, () => {
      console.log("Server is running on port: ", PORT);
    });
  })
  .catch((err) => {
    console.log("An error occured during connecting to database", err);
  });
