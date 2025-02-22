/*

Q - Difference Between Function and Method in JavaScript

In JavaScript, both functions and methods allow you to perform actions, but they have key differences in how they are used and where they belong.

Feature              Function                              Method
Definition - A standalone block of reusable code -	A function inside an object
Called On - Can be called anywhere -	Called using an object
this Keyword - Does not refer to an object by default -	Refers to the object it belongs to
Usage - General-purpose code execution -	Used for object-specific behavior


1. What is function?
--> A Function is a standalone block of code than can perform some specific task and it can defined outside of object and called independently

ex:
    function s(name) {
        console.log("Helllo", name)
    }
    s("suraj")  // output: Hello suraj


2. What is method?
--> A method is a function which is inside an object and is called using the object.

ex: 
    const obj = {
        name:"Suraj",
        x:function(){
            console.log("Hello", this.name)
        }
    }
    obj.x()  // output

3. "this" keywork behaves differently in function and method
--> 1. In function, this refers to undefined when its in strict mode and in strict mode "this" be an global object
    2. In method, this refers to that object

4. Can a function be used as a method?
--> Yes, if you assign a function to an object property then it becomes a method.

ex:
    function sayHello() {
        console.log("Hello!");
    }

    const obj = {
        greet: sayHello  // Assign function to object
    };

    obj.greet();  // Output: Hello! (Now it's a method)
    sayHello() is originally a function, but when assigned to obj.greet, it becomes a method.

5. Can a method can be used a function
--> Yes, but if you call it without an object, this becomes undefined!
ex:
    const person = {
    name: "John",
    greet: function () {
        console.log(this.name);
    }
    };

    const greetFunc = person.greet;  // Extract method
    greetFunc();  // Output: undefined (because `this` is lost)

✅ Fix with .bind()
const boundGreet = person.greet.bind(person);  // Fix `this`
boundGreet();  // Output: John





// What is IIFE?

1. IIFE is an Immediately Invoked Function Expression is a javascript functin that runs immediately after being defined
2. It runs immediately without needing to be called explicitly
3. It creates private scope to avoid pulluting the global scope
4. It is enclosed in parenthesis to make it exprssion instead of a declaration


*/

function s(){
    console.log();
}

