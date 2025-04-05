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

    e. Other way to handler request handler
    app.get("/user", (req,res,next)=>{
        console.log("Hello from the server 1")
        next()
    })
    app.get("/user", (req,res,next)=>{
        console.log("Hello from the server 2")
        res.send("Hello from the server 2")
    })

    f. So why express made like to call next() we can write code in one function itself
    --> because of middleware
    g. In terms of lingo, whenever the api request come, express will go through all the app.xxx functions until it gets the request handler, functions before request handlers are called middlewares.


    // Why do we even need middlewares
    1. Suppose, an api called made, so before we proceed further to send response i need to check that user is valid or not using middlewares
    2. Multiple endpoints will be there, so we can't write same login in every endpoint or request handler, so here comes the picture of middlewares,
    3. app.use() --> we use this app.use function because it handles all the http methods(get, post, put, patch, delete, options) 





Questions: 
    1. What is middleware?
    --> 
        1. Middleware in express is any function which have access to request, response, and next function in the request-response cycle
        2. Purpose:
            i. Execute the code(auth, loggin, verify)
            ii. Modify request and response objects
            iii. End the response-request cycle using response.send()
            iv. next() - to pass controll to the next middleware or route
        3. Types of middleware:
            i. Application level - app.use() or app.get() etc
            ii. router level - route.use()
            iii. built-in - express.json()
            iv. third party - cookieparse, bodyparser, cors, etc.
            v. error handling - has 4 args (err, req, res, next)



    2. How express js handle the request behind the scene?
    --> 
        1. Express is like piplines of functions (middlewares and route handlers)
        2. Step by step:
            1. CLient send a request(GET:/user)
            2. Express recieves it
            3. Express will go through all the middleware and router in order they are declared
            4. If a middleware matches, it runs
            5. If it calls next(), the next one runs
            6. If a routes matches and responds(res.send) then express will stop the chain
            7. If nothing matches, it will respone 404, not found

    3. Difference between app.use and app.all
    -->
        1. app.use()
        --> 1. To handle middleware functions
            2. Excepts all http methods
            3. Matches prefex path(can continue)
            3. It needs next to call the next one

        2. app.all()
        --> 1. To handle route handlers
            2. Excepts all http methods
            3. Mathches exact path only
            4. as it register route handlers, it ends with res.send()


*/
