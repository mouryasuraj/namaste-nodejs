const express = require("express");
const { authAdmin, userAuth } = require("./middlewares/auth");

const app = express();

app.use("/admin", authAdmin);

app.get("/user/getalluser", userAuth, (req,res)=>{
    res.send("Get all the users data")
})

app.get("/admin/getAllData", (req, res, next) => {
  res.send("All data sent");
});
app.get("/admin/getAllUsers", (req, res, next) => {
  res.send("All users");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
