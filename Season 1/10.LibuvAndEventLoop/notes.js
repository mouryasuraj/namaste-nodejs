/*


Libuv and Event loop

1. Executing asynchronous code in node.js is because of libuv


//How Libuv works

var a = 10;
var b = 20;
 
https.get('https://api.com', (res)=>{
    console.log("Hello")    
})

setTimeout(() => {
    console.log("Hello");
}, 5002);



We will take the above example
1. Javacript will execute code synchrounously but when it identify that it is a async code js will offload that code to libuv and libuv will take care of this code, suppose in the above example we are calling an api, so libuv will take care of it and javascript continue to run the rest of the code. so in between api response is came then inside libuv we have callback queues after the response came libuv will push that callback funciton inside this call back queue and when javascript execute all the code or js sit idle then libuv give callback funciton to the js engine and then that call back will execute
2. Event loop: Its only job to check the callstack and callback queues. libuv push callback function to callstack with the help of event loop


// Inside Event Loop
1. There are many phases inside event loop. The 4 major phase is Timer, Poll, Check and Close. Phases run in sequence. First phase is Timer
2. Timer:  In timer phase, executes (setTimeout and setInterval) whose time is expired
3. Poll: All the callback which is associated with I/O callback will be executed in this phase
    1. Incoming connections
    2. Data
    3. fs, crypto, http.get()
    4. Most of the callback will executes in this phase
4. Check: All the callback which are set using setImmediate will be execute in this phase
5. Close: all the callback which used to close something will execute in this phase like Socket.onclose()
6. Before every phase, event loop follow a inside cycle:
    1. Process.next() : if any callback in associated with process.next() then it will execute
    2. Promise callback: if any promise related callback is there then it will execute
    3. Its for priority


Note:
    1. Event loop waits at poll phase if nothing is there to execute

*/

