const crypto = require("crypto")

crypto.pbkdf2("SurajMourya", "Shiv",500000, 50, 'sha512', (err,key)=>{
    console.log("1, done");
})
crypto.pbkdf2("SurajMourya", "Shiv",500000, 50, 'sha512', (err,key)=>{
    console.log("2, done");
})
crypto.pbkdf2("SurajMourya", "Shiv",500000, 50, 'sha512', (err,key)=>{
    console.log("3, done");
})
crypto.pbkdf2("SurajMourya", "Shiv",500000, 50, 'sha512', (err,key)=>{
    console.log("4, done");
})
//The above 4 will give result at same time because, libuv have by default 4 UV_THREAD_POOL and 5 will wait for thread to be free

crypto.pbkdf2("SurajMourya", "Shiv",5000000, 50, 'sha512', (err,key)=>{
    console.log("5, done");
})

