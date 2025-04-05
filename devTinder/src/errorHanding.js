const express = require("express");

const app = express();


//Handle error properly

app.get("/getuserdata",  (req,res)=>{
    throw new Error("dfghjkl")
    res.send("Get all the users data")
})


//Use this middleware to handle error if any error comes, because it will match any path
app.use("/", (err, req, res,next)=>{
    if(err){
        console.log(err);
        res.status(500).send("Something went wrong")
    }
})


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
