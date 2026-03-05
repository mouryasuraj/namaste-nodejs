/*

// Routing and Request Handlers


1. Order matters in routes
-->
    ex: 
        app.use("/home", (req,res)=>{
            res.send("Hello")    
        })
        app.use("/", (req,res)=>{
            res.send("/")    
        })
        app.use("/test/hello", (req,res)=>{
            res.send("test hello")    
        })

2. What is HTTPS status code?
--> 
    1xx - informational response
    2xx - Success
    3xx - redirects
    4xx - Client errors
    5xx - Server errors

3. app.use match all the http method api
4. app.get means if we use http methods then it will only match that url and method also
5. Explore more about routing and also about ?, +, * ,() and use of regex in routes
6. Reading the query params and dynamic routes
*/