const express = require('express') // import the express package

const app = express()  // Creating an express application or web server


// app.use((req, res)=>{
//     res.send("Hello from server") //It will send the response on any url
// })

app.use("/test",(req, res)=>{
    res.send("Hello from server url") //It will send the response on a specified url
})




// If we create a server then it have to listen on some port
app.listen(3000,() =>{
    console.log("Server is running on 3000 port");
})    