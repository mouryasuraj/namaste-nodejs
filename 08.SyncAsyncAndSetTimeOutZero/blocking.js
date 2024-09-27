const crypto = require("crypto")

console.log("Hello World");

var a = 1078698;
var b = 20986;


// It is synchronous code. It will block the code. sync function don't have callback
crypto.pbkdf2Sync("SurajMourya", "salt", 5000000,50, "sha512") //password based key derivation function 2
console.log("First key generated");


// It is asynchronous code. It will not block the code
crypto.pbkdf2("SurajMourya", "salt", 500000,50, "sha512", (err,key) =>{
    console.log("key: ",key);
    
}) //password based key derivation function 2

function multiply(a,b){
    const result = a * b;
    return result;
}

var c = multiply(a,b);

console.log("Multiplication result is: ", c);

