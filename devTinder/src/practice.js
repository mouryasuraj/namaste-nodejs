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

// app.get("/user/:userId",(req,res)=>{
//     console.log(req.params.userId);
//     res.send(`Hello 123`)
// })

// // use {} for options
// app.get("/get{a}ll", (req,res)=>{
//     res.send("Get all the data")
// })


// // use * to enter anyting between those means url should start with get and end with ll
// app.get("/get*ll", (req,res)=>{
//     res.send("Get all the data")
// })



// Middlewares & Error Handlers

// app.use("/user", (req,res)=>{
//     //This function is known as route handler
//     res.send("Route handler 1") // if we don't send any response then the request will take time and finally it will say timout(Could not get any response Error: socket hang up)
// })



//one router can have multiple request handle
// app.use("/user", (req,res)=>{
//     console.log("Request handler")
//     res.send("Hello")    // In this case, it will send the response and return from here, it will not go to execure 2nd request handler
// },(req,res)=>{
//     console.log("Request handler2")
//     res.send("Hello2")
// })



//What if you don't send the response in the first request handler

// app.use("/user", (req,res)=>{
//     console.log("Request handler")
//     //So whenver a request came, it will hang here, and after some time timeout error will come beacuse it will not execute the 2nd or next request handle automatically. we have call the next() fucntion to execute that. Please refer the below example of next()
// },(req,res)=>{
//     console.log("Request handler2")
//     res.send("Hello2")
// })


//use next() to call the next request handler
// app.use("/user", (req,res,next)=>{
//     console.log("Request handler")
//     // res.send("heelo") // if you send response before next() then response from the first handler will sent but it will also run the next handler and if you try to send response again then it will throw an error: Cannot set headers after they are sent to the client
//     next() //It will call the next request handler
// },(req,res, next)=>{
//     console.log("Request handler2")
//     res.send("Hello2")
//     next()
// })

//we can also send the handlers in array
//ex:
const handler1 = (req,res,next) =>{
    console.log("handler1");
    next()
}
const handler2 = (req,res,next) =>{
    console.log("handler2");
    next()
}
const handler3 = (req,res,next) =>{
    console.log("handler3");
    next()
}
const handler4 = (req,res,next) =>{
    console.log("handler4");
    next()
}
const handler5 = (req,res,next) =>{
    console.log("handler5");
    res.send("Hello from the server")
}
const requestHandlers = [handler1, handler2, handler3, handler4, handler5]
app.post("/user",requestHandlers)






// If we create a server then it have to listen on some port
app.listen(3000,() =>{
    console.log("Server is running on 3000 port");
})    