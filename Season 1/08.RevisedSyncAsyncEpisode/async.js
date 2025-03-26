const fs = require("fs");
const https = require("https");

console.log("Hello, start");

https.get("https://dummyjson.com/products/1", (res)=>{
    console.log("Fetced data successfylly");  
})

setTimeout(() => {
    console.log("Logged after 5 second");
}, 5000);

fs.readFile("./file.txt", (err, data)=>{
    console.log("File read successfully", data);    
})



function multiply (a,b) {
    const result = a * b;
    return result;
}

const c = multiply(2,2)

console.log(c);

