/*

// Expession and Declaration in javscript
1. What is the difference between function declaration and function expression?
2. Are function expressions hoisted? Why or why not?
3. Can you use an anonymous function in a function declaration?
4. Give an example of a named function expression.
5. What is an expression in JavaScript? Give examples.

// IIFE
6. What is an IIFE in JavaScript?
7. Why do we use IIFE?
8. What is the difference between IIFE and a normal function?
9. How does IIFE help in modular programming?
10. Can we pass parameters to an IIFE?

// Node js
11. How are variables and functions private in different modules
12. From where do you get the access of module.exports and require functions etc...
1️3. How does require() work internally?
14. What is the difference between exports and module.exports?
15. What happens if a module is required multiple times?
16. How does Node.js resolve a module when using require()?
17. What is the purpose of the Module Wrapper Function in Node.js?

//Libvu
18. What is event-driven architecture in node.js?
-->
    Event-Driven Architecture (EDA) is a software design pattern where the flow of execution is controlled by events rather than a sequential order of code execution.

    💡 How It Works?
    1️⃣ Event Producer → Generates an event (e.g., button click, API request).
    2️⃣ Event Broker (optional) → Manages and distributes events.
    3️⃣ Event Consumer (Listener/Handler) → Reacts to the event and executes a task.

    🔹 Example in Node.js (EventEmitter)

    const EventEmitter = require('events');
    const eventEmitter = new EventEmitter();

    eventEmitter.on('orderPlaced', (orderId) => {
        console.log(`Order ${orderId} has been placed.`);
    });

    eventEmitter.emit('orderPlaced', 12345);



19. What is thread?
--> 📌 Interview Answer: What is a Thread?
        A thread is the smallest unit of execution within a process. It allows a program to run multiple tasks concurrently within the same memory space.

        Single-threaded process: Executes one task at a time.
        Multi-threaded process: Can run multiple tasks in parallel.
        🔹 Example:
        In JavaScript, Node.js is single-threaded by default, but it uses asynchronous, non-blocking I/O to handle multiple tasks efficiently. However, for CPU-intensive tasks, we can use Worker Threads to achieve multi-threading in Node.js.

        const { Worker } = require('worker_threads');

        const worker = new Worker('./worker.js');  // Runs worker.js in a separate thread

        worker.on('message', (msg) => {
            console.log("Worker Message:", msg);
        });

        Key Points:

        1.Threads share memory with other threads of the same process.
        2.Multi-threading is useful for CPU-intensive operations like image processing, data analysis, etc.
        3.In Node.js, Worker Threads enable true multi-threading.
19. V8 Engine: 
    1. How V8 Works behind the scene?
    2. What is lexical Analysis?
    3. What is tokens?
    4. What is syntax analysis
    5. What is Interpretter and Compiler?
    6. What is Interpretter Language and Compiled Language?
    7. How JIT works
    8. How code is deoptimized
    9. What is garbage collection
    10. What is mark and sweep algorithm?
    11. What is inline caching?
    12. What is V8 architecture

20. Is Nodejs single threaded or multithreaded?
--> It depends on the code, if code is not blocking the main thread then it will behave as single threaded but if it needs libuv means have a async code then it will become multithreaded

*/
