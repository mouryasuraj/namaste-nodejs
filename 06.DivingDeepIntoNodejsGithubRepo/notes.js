// Diving deep into nodejs github 


/*

1. Whenever we create a function or wrap some piece of code then it becomes private, we cannot access those variables and functions which are present over there.
2. Modules work the same way like javascript
3. All the codes which are present inside a module are wrapped into a function and then it executes. so we cannot access those variables and functions.
4. The only way to access those variables and functions by module.exports(Common JS module) or export(ES Module)
5. require("./path") --> ALl the code inside the require are wrapped into a function and this function is a special function called IIFE(Immediately Invoked Function Expression)
    ex:     (function(){
                //ALl the code of a module wrapped and put it here
            })()
6. Before giving to V8 Engine. It wraps all code inside IIFE

*/

// QUestions

/*

1. How are variables and function private in different modules?
--> Beacuse all the code are wrapped inside IIFE functions

3. How do you get access to module.exports?
--> (function (module, require)=>{
        require("./path")
        const a = 10;
        console.log(a);

        module.exports = {a}
    })(module.exports = {}, require);
    2. Node js is providing module.exports
    3. Nodejs passes module and require as a parameter to the IIFE
    4. When these codes are wrapped inside a function then only it pass to V8 Engine

// 5 steps mechanism to get the module and execute it using require 

1. Resolving the module
    a. To check which type of module it this
        ex: i. ./localpath --> means normal files
            ii. ./.json    --> means Javascript Object Notation
            iii node:module --> internal module
2. Loading the module  --> (It depend on the type)
    a. File content is loaded according to the file type
3. (Complile) --> fIt wraps those code inside IIFE 
4. Evaluation --> module.exports happens
5. Caching--->
    1. whenever required functions is called, it only calls for one time only, if nothing changed in that file then node js give that file from cahce for efficiency.
    2. Suppose one file is there "app.js" and two more file "other.js" and "other1.js". These files require app.js.
    3. Then first it require(./app.js) in other.js file, the above mentioned 5 mechanism will happen. first it resolve the module by checking the file type, then it loads the module which is depend on type and the it wraps all the code present in app.js in IIFE and then evaluate by returing the module.exports object and it store that in cache.
    4. But if other1.js file requires app.js then node js give app.js from cache, it will not again do all that 5 mechanism because this file was cached now whenever any other file requires app.js, node js will give from cache

// How require works?
Understanding require("./path") in Node.js

In Node.js, require is a built-in function that allows you to import modules or files into your current script. When you use require("./path"), you're telling Node.js to load a module or file located at the specified path relative to the current file.

How require Works
Here's a step-by-step breakdown of what happens when you use require("./path"):

1. Resolving the Path
When you call require("./path"), Node.js first resolves the path to an absolute path. It does this by appending the relative path to the current working directory (CWD) of your Node.js process.

For example, if your current file is located at /Users/username/project/index.js and you call require("./module"), Node.js will resolve the path to /Users/username/project/module.

2. Checking the Module Cache
Before loading the module, Node.js checks its internal module cache to see if the module has already been loaded. If it has, Node.js returns the cached module instead of reloading it.

3. Loading the Module
If the module is not cached, Node.js loads the module using the following steps:

File Extension: Node.js checks the file extension of the module. If it's a .js file, Node.js loads it as a JavaScript file. If it's a .json file, Node.js loads it as a JSON file. If it's a .node file, Node.js loads it as a compiled addon.
File Loading: Node.js loads the file using the fs module (File System). If the file is a JavaScript file, Node.js executes it using the V8 JavaScript engine.
Module Registration: Once the module is loaded, Node.js registers it in the module cache.
4. Returning the Module
Finally, Node.js returns the loaded module to your script. You can then use the module's exports in your code.


When using require("./path"), keep the following best practices in mind:
   --> Use relative paths instead of absolute paths to make your code more portable.
   --> Avoid using require inside loops or conditional statements, as this can lead to performance issues.
   --> Use the module.exports object to export modules instead of assigning to the exports object directly.

// Needs to research
1. 5 step of required mechanism
2. 

*/