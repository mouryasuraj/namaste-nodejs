// Libuv and async IO

// JavaScript recap
 /*
 
 1.JS is a synchronous single threaded language
 2.Synchronous and Asynchronous in JS
 --> 
    1.Synchronous
        a. In Synchronous, the next line of code will only execute after the completion of the current line of code.
        b. This is a blocking queue.
        c. Ex: 
            const a = 1234567;
            const b = 123;
            function multiply(x,y){
                return a * b
            }
            multiply(a,b)  
        d. These task doesn't block the code
    2.Asynchronou
        a. In Asynchronous, we can execute time consuming code easily
        b. This is a non-blocking code
        c. Ex:
            https.get("https://api.fbi.com", (res) =>{
                console.log("Secret Key: ", res.secretkey)
            })

            fs.readFile("./gossip.txt", "utf8", (data)=>{
                console.log("File data", data)
            })

            setTimeout(()=>{
                console.log("wait here for 5 seconds")
            },5000)
        d. These task can take time

3. Javascript offloads everyting to libuv
4. Libuv is a multi-platform C library that provides support for asynchronous I/O based on event loops.
--> https://libuv.org/
    a. libuv is just some piece of code
    b. Libuv is like middle layer between V8 engine and operating system
    c. Nodejs is asynchrounous and v8 engine is synchronous
    d. Nodejs can do asynchrounous I/O operations (Non- blocking I/O)
 
 */


var a = 123456;
var b = 3456;

https.get("https://api.fbi.com", (res)=>{
    console.log(res?.secret);
})

setTimeout(()=>{
    console.log("setTimeout");
},5000)

fs.readFile("./gossip.text", "utf8", (data)=>{
    console.log("file data", data);
})

function multiplyFn(x,y){
    const result = a * b;
    return result;
}

var c = multiplyFn(a,b)
console.log(c);
