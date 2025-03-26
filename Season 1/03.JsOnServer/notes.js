// JS On Server

/*

1. Server is just a normal computer. 
2. Server is used to receive request from client or other way and send the response according to that request.
3. We can write JavaScript in Web Browser and now we can also create servers in javascript using nodejs.
4. V8 Engine is just a code which is written in C++.  V8 Github: https://github.com/v8/v8 
5. Node js is a c++ application with V8 embedded into it.
6. ECMASCRIPT is a standard of javascript. Standard means that it will follow the rule how we can write the javascript code. 
        For example: 
            1. If you write "===" which is strict checker, this is the standard which written in ecmascript.
            2. All browser's have their own javascript engine which is witten in different language, so they have to follow the standard of ecmascript to get the same result.
7. V8 can embedded with any C++ program.
8. V8 + Some C++ code (API's like connecting to database, importing images from devices and etc.) because V8 can't have these powers, that is the reason ryan dahl created nodejs.
9. NOde js have only 20% c++ program and 62 % javascript : https://github.com/nodejs/node

//V8 is a C++ Code why?

1. Because we have multiple level of conversion of code.
2. We write javascript code then execute it in V8 which is written in C++ which is a high level languauge and It takes JS code and convert it into machine code and converted into assemmbly code and again it converted into binary because machine only understand binay code which is just 0's and 1's.
3. The code we write in higher languages are converted into low lever langauges(machine and assembly code)

Read about:
    Ecmascript
    V8
    NodeJS
    https://tc39.es/ecma262/


*/

// Revision

/*

1. Server is remote computer. You can assume like computer's CPU which works remotely.
2. Suppose, 10.250.233.233.12 is an IP, this IP indicates a remote computer(which is a server). From client we request on this IP from any browser and will get the response whatever is running on that IP
3. In the initial days, we were only able to run JS code in browser's only but because of nodejs we can run js outside of browser
4. Node.js
    a. Node.js is a runtime of a javascript, it have V8 engine and some powerful api's and modules
    b. Now we can create server's using javscrip code and website also using a single pragramming language which is JavaScript
    c. Node js also have libuv, it is used to perform async task like I/O, file reading, API calling
5. V8:
    a. V8 convert the javacript code into machine level code so that it can execute quickly
6. Ecmacript: 
    a. Ecmacript is a standard which javacript and some other scripting languages follows.
    b. every javscript engine follow ecmacript standard so that it should geenerate same result, it doesn't matter which language you are using to create javascript runtime environment but you have to follow ecmascript standard to stay consisted and get the same result.
7. Why V8 is a c++ code:
    1. Computers understand only binary which is 0s and 1s.
    2. So, on the top of binary there is assembly code and on top it machine code and then high level language or code is there like c++ and on top it JAvscript is there
    3. So v8 takes javascript code and convert it into machine code so that computer can understand and execute it fast
    4. we can't understand binary and assembly languaes that's why we write code in high level languages and then v8 convert it into machine code
*/