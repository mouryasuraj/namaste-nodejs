/*

// Middlewares & Error Handlers


1. If we don't send any response from the server then the request will be timeout, so we have to send response from the server
ex: 
    app.use("/user", (req,res)=>{
        console.log("Request handler")    //so whenever a request come on /user it will just console log and do nothing
    })

2. One router can have multiple route handlers
ex: 
    case 1:
        app.use("/user", (req,res)=>{
            console.log("Request handler")
            res.send("Hello")    // In this case, it will send the response and return from here, it will not go to execure 2nd request handler
        },(req,res)=>{
            console.log("Request handler2")
            res.send("Hello2")
        })
    case 2:
         app.use("/user", (req,res)=>{
            console.log("Request handler")
            if you don't send respone from the first request handler then it will hang here and after some time it will throw timout error. to execute the next request handler you have to use next() which is the third parameter of request handler
        },(req,res)=>{
            console.log("Request handler2")
            res.send("Hello2")
        })  
    case 3: 
        app.use("/user", (req,res,next)=>{
            console.log("Request handler")
            next() // Next function will execute the 2nd request handler
        },(req,res)=>{
            console.log("Request handler2")
            res.send("Hello2")
        })  
    case 4:
            app.use("/user", (req,res,next)=>{
                console.log("Request handler")
                // res.send("heelo") // if you send response before next() then response from the first handler will sent but it will also run the next handler and if you try to send response again then it will throw an error: Cannot set headers after they are sent to the client
                next() //It will call the next request handler
            },(req,res)=>{
                console.log("Request handler2")
                res.send("Hello2")      
            })
    case 5:
         app.use("/user", (req,res,next)=>{
                console.log("Request handler")
                // res.send("heelo") // if you send response before next() then response from the first handler will sent but it will also run the next handler and if you try to send response again then it will throw an error: Cannot set headers after they are sent to the client
                next() //It will call the next request handler
                console.log("After 2nd request handler")
                res.send("hello")
            },(req,res)=>{
                console.log("Request handler2")
                res.send("Hello2")      
            })
    a. Carefull with next(). Use in a proper way

    b. //we can also send the handlers in array
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
    app.use("/user",requestHandlers)

    c. app.use("/user", [handler1, handler2], handler3, handler4, handler5) // we can use like this also
    d. This will also works for https methods also
*/
