const fs = require("fs");
const https = require("https");

console.log("Hello, start"); // 1

https.get("https://dummyjson.com/products/1", (res)=>{
    console.log("Fetced data successfylly");  //4 
})

setTimeout(() => {
    console.log("Logged after 5 second"); //5
}, 5000);

fs.readFile("./file.txt", (err, data)=>{
    console.log("File read successfully", data);   //3 
})



function multiply (a,b) {
    const result = a * b;
    return result;
}

const c = multiply(2,2)

console.log(c); //2

