const crypto = require("crypto")

console.log("Hello");

//sync - block the call stack(main thread)   pbkdf2(Password Based Key Derivative Function 2)
crypto.pbkdf2Sync("SurajMourya", "itaws", 500000, 10, 'sha512')

//Asyns
crypto.pbkdf2("SurajMourya", "itaws", 500000, 10, 'sha512', (err, key) =>{
    console.log("Key generated",Buffer.from(key, 'utf8'))
})

function multiply (a,b) {
    const result = a * b;
    return result;
}

const c = multiply(2,2)

console.log("multiply",c);
