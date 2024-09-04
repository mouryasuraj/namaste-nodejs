// Diving deep into nodejs github 


/*

1. Whenever we create a function or wrap some piece of code then it becomes private, we cannot access those variabls and functions which are present over there.
2. Modules work the same way javascript
3. All the codes which are present inside a module are wrapped into a function and then it executes. so we cannot access those variables and function.
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


    //Resume from : 1:04: 00 from 5 steps mechanism of require
*/