const fs = require("fs");
const https = require("https");



https.get("https://api.monkeytype.com/users/yjJwJdoh04hnms9sD0UdpfeoAXV2/profile?isUid=true", (res) =>{
    console.log("Fetched Data Successfully");
})


setTimeout(()=>{
    console.log("Executed after 5 seconds");
},5000)


// this is a synchronous function. It will the block the thread
fs.readFileSync("./file.txt", "utf8")
console.log("Before")


// This is asynchronous function. Nodejs offload this function to libuv
fs.readFile("./file.txt","utf8", (err, data) =>{
    console.log("File Data: ", data);
})


const a = 1000000;
const b = 123456;

function multiply(a,b){
    const result = a * b;
    return result;
}

const c = multiply(a,b)

console.log(`Multiplication of ${a} and ${b} is: ${c}`);



// Consoledata
/*


Sync File Data: This is a demo data
Multiplication of a and b is: 12345678
Fetched Data Successfully
Executed after 5 seconds


*/

