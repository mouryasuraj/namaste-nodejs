// Introduction to NodeJS

/*

1. Run JavaScipt Everywhere.
2. NodeJS is a JavaScript Runtime built on Chrome's V8 JavaScipt Engine.
3. NodeJs is a cross platform(It can be run on any devices or Operating System).
4. It is an open source maintain by OpenJS Foundation.
5. NodeJS has an event-driven architecture capable of asynchronous I/O(Non-blocking I/O).
6. It's first version released in 2009 and was developed by Ryan Dahl.

// History of NodeJS

1. In 2009 NodeJS was born and created by Ryan Dahl.
2. Whatever we write in NodeJS is a javascript code and we cannot run javascript code without JS Engine.
3. Wherever there is a javascipt, there will a javascript engine.
4. Every browser runs javascript and every browser have their own javascript engine. 
5. Chrome(V8 Engine), Firfox(Spider Monkey), Safari(JavascriptCore)
6. Joyent is a software company which used nodejs and build some projects using it in initial stage of nodejs.
7. First name of nodejs was webjs.
8. In 2010, npm was build. NPM is a package manager for NodeJS. It is registry where all the packages are build and stored.
9. Initially, nodejs was build for only mac os and linux. Later in 2011, it was also build for windows and it was led by Joyent and Mircosoft.
10. In 2012, Ryan left the nodejs project and then it was handled by Isaac Z who created npm.


Iska Naam "Node" Kyu Hai?
Iska naam "Node" is wajah se rakha gaya hai kyunki Node.js applications chhoti-chhoti independent units (nodes) ki tarah kaam karti hain jo ek network me aapas me communicate karti hain.



// Questions
1. what is web server

ChatGPT said:
Explanation in English-----------

A web server is a software or hardware that serves web pages to users over the internet. It processes requests from web browsers (like Chrome, Firefox) and delivers the requested web pages or resources (HTML, CSS, JavaScript, images, etc.).

How it Works?
A user enters a website URL (e.g., www.example.com) in their browser.
The browser sends a request to the web server hosting that website.
The web server processes the request and sends back the required webpage or data.
The browser displays the received content to the user.
Examples of Web Servers
Apache HTTP Server (Common for hosting websites)
Nginx (Used for high-performance web applications)
Node.js (Can act as a web server using frameworks like Express.js)


Explanation in Hindi (Roman Script)--------

Ek web server ek aisa software ya hardware hota hai jo internet par users ko web pages provide karta hai. Ye web browser (jaise Chrome, Firefox) se aane wale requests ko process karta hai aur required web page ya resources (HTML, CSS, JavaScript, images, etc.) bhejta hai.

Kaise Kaam Karta Hai?
Jab user apne browser me kisi website ka URL (jaise www.example.com) dalta hai.
Browser ye request web server ko bhejta hai.
Web server is request ko process karke required webpage ya data wapas bhejta hai.
Browser is content ko display karta hai, aur user website dekh sakta hai.
Web Server ke Examples
Apache HTTP Server (Commonly websites ke liye use hota hai)
Nginx (High-performance web applications ke liye)
Node.js (Express.js jese frameworks ke sath web server ka kaam kar sakta hai)



2. Why was Node.js Built?

Explanation in English-----------

Node.js was built to solve the limitations of traditional server-side technologies like PHP, Java, and ASP.NET, which follow a blocking (synchronous) request-response model. These older technologies handle each request separately, which can slow down performance when dealing with multiple users.

Ryan Dahl created Node.js in 2009 to provide a non-blocking, event-driven environment that could efficiently handle multiple connections at the same time without getting stuck waiting for one request to finish.

Key Reasons for Building Node.js
Non-blocking Asynchronous I/O – Allows multiple tasks to run simultaneously without waiting for each other.
Single Programming Language (JavaScript) – Developers can use the same language (JavaScript) for both frontend and backend.
Fast Execution – Uses Google’s V8 engine, which compiles JavaScript into machine code, making it super fast.
Highly Scalable – Handles thousands of concurrent connections using event-driven architecture.
Lightweight and Efficient – Uses less memory compared to traditional server-side technologies.
Example of Why Node.js is Useful
Imagine a chat application like WhatsApp or Messenger. In traditional server-side tech, every request would block the server while processing, leading to slow performance. But Node.js can handle thousands of users chatting in real-time without blocking requests, making it highly efficient.

Node.js Kyu Banaya Gaya?-----------

Node.js 2009 me Ryan Dahl ne banaya tha taaki purani server-side technologies (PHP, Java, ASP.NET) ki problems solve ki ja sakein. Purane servers blocking model follow karte the, jo har request ko alag-alag process karte hain. Yeh slow ho jata hai jab bahut sare users ek saath connect hote hain.

Node.js ek non-blocking, event-driven model par kaam karta hai jo ek saath multiple users ko efficiently handle kar sakta hai.

Node.js Banane Ke Piche Ke Reasons
Non-blocking Asynchronous I/O – Ek request ke complete hone ka wait nahi karta, dusre kaam bhi parallel me chal sakte hain.
JavaScript Backend Me Use Karna – Pehle JavaScript sirf frontend ke liye hoti thi, par Node.js ne backend me bhi JavaScript ka use possible banaya.
Super Fast Execution – Google ke V8 engine ka use karta hai jo JavaScript ko directly machine code me convert karta hai.
Highly Scalable – Ek hi thread me hazaaro users ke requests ko handle kar sakta hai bina slow hue.
Lightweight aur Efficient – Kam memory use karta hai aur fast response deta hai.
Example: Node.js Kyu Useful Hai?
Socho WhatsApp ya Messenger jese chat apps. Agar har user ka request server block kare, to chat slow ho jayega. Par Node.js multiple users ki real-time chatting handle kar sakta hai bina kisi delay ke, isiliye yeh itna powerful hai.

*/



