const express = require('express') // import the express package

const app = express()  // Creating an express application or web server


// app.use((req, res)=>{
//     res.send("Hello from server") //It will send the response on any url
// })

// order of the routes matters

// app.use("/test",(req, res)=>{
//     res.send("Hello from server url") //It will send the response on a specified url
// })
// app.use("/hello",(req, res)=>{
//     res.send("Hello from server hello hello") //It will send the response on a specified url
// })

// app.use("/",(req, res)=>{
//     res.send("Hello from server") //It will send the response on any url
// })



//http methods (get, post, put, patch, delete)


// This will only handle get call to /user
// app.get("/user", (req,res)=>{
//     res.send({firstName:"Suraj", lastName:"Mourya"})
// })


// // This will only handle post call to /user
// app.post("/user", (req,res)=>{
//     //Logic to save data to the database and then send response
//     res.send("data saved successfully")
// })


// app.delete("/user", (req,res)=>{
//     //Logic to delete data from the database and then send response
//     res.send("data deleted successfully")
// })




// more about routes

// app.get("/abc", (req,res)=>{
//     res.send("Hello")
// })


// we can add any character between ab and cd ex: abSurajcd
// app.get("/ab*cd", (req,res)=>{
//     res.send("Hello1")
// })

// we can also use regex in url
// If url inclued ab then the below endpoint will execute
// app.get(/ab/,(req,res)=>{
//     console.log(req.query);
//     res.send(`Hello ${req.query.userid} = ${req.query.password}`)
// })

app.get("/user/:userId",(req,res)=>{
    res.send(`Hello 123`)
})



// If we create a server then it have to listen on some port
app.listen(3000,() =>{
    console.log("Server is running on 3000 port");
})    