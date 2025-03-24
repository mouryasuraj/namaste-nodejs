const crypto = require("crypto")
// WE can increase the size of thread pool, we have to set the size of thread pool before running node
//$env:UV_THREADPOOL_SIZE=2; node app.js      //for powershell
// set UV_THREADPOOL_SIZE=1 && node app.js


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

crypto.pbkdf2("SurajMourya", "Shiv",500000, 50, 'sha512', (err,key)=>{
    console.log("5, done");
})

