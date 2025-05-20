import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDB from "./config/connectDB.js";
import authRouter from "./routes/auth.js";
import cookieParser from "cookie-parser";

const app = express();
const port = process.env.PORT;

//inBUild middlewares
app.use(express.json())
app.use(cookieParser())

app.use("/auth", authRouter)

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log("Datebase connection established");
      console.log("Server is running on port: ", port);
    });
  })
  .catch((error) => {
    console.log("failed to connect database", error);
  });
