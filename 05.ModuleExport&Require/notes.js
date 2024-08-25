// Module Export and Require

/*

// Common JS Module Pattern

1. Whenever you create a nodejs application, there should be a entry point to state the application like "app.js", "server.js" but what is if i want to run other files also, then we have to use require or import/export to run the code
    for ex: 
        app.js:
            require("./other.js")   //require is used to import a file and run that file and then below one

            let a = 10;
            let b = 20;
            console.log(a+b);

        other.js:
            console.log("this should also run")
        log:
            this should also run
            30
2. require("./other")  //Require is used to import module or run that file. It can only execute that file but we cannot have access to their variables, functions, etc. by simple writing require.
3. Modules protects their variables and functions from leaking by default. 
4. If you want to access variables and function from one module to another module use below wayx.
    for example:
        app.js:
                const calculateSum = require("./calculateSum.js")  //Before require, you have to export it first
                let a = 10;
                let b = 20;
                console.log(calculateSum(a,b));
        calculateSum.js:
                const calculateSum = (a,b) =>{
                    return a+b;
                }

                module.exports = calculateSum;
5. For multiple export from one file. We can do that by object destructuring:
        for example:
        app.js:
                const {calculateSum,x} = require("./calculateSum.js")  //Before require, you have to export it first
                let a = 10;
                let b = 20;
                console.log(calculateSum(a,b));
                console.log(x);
        calculateSum.js:
                let x = "Hello world"
                const calculateSum = (a,b) =>{
                    return a+b;
                }

                module.exports = {calculateSum,x};
6. We can't access private variable from one to another file, to get the access we have to first export that and then import it.
7. This pattern is known as Common JS Module Pattern
8. Common JS Module is synchronous
9. This runs the code in non-strict mode
     

// ES Module Pattern
1. This is the new way to export and import.
2. To use this pattern we have to add "type":"module" in package.json file
3. There are two ways to import/export things from file:
    a. Common JS Module which is by default
    b. ES Module 
4. Example:
        app.js:
                import {x,y,demo} from './other.js'

                console.log(x,y);
                demo()
        other.js
                let x = 10;
                let y = 5;

                const demo = () =>{
                    console.log("demo");
                    
                }
                export {x,y,demo}
5. ES Module is Asynchronous
6. This runs the code in strict mode. That's why if you're importing something please import properly with extension:
    ex: import sum from 'sum.js'



*/