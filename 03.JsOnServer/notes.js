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