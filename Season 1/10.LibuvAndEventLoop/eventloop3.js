const fs = require("fs");

setImmediate(() => console.log("Immediate"));//Execute - 5

setTimeout(() => console.log("Time"), 0); //Execute - 4

Promise.resolve("Promise").then(console.log);//Execute - 3

fs.readFile("./file.txt", "utf8", () => {
  setTimeout(() => console.log("2nd Timer"), 0);// Execute - 9
  process.nextTick(() => console.log("2nd process"));// Execute - 7
  setImmediate(() => console.log("2nd Immediate"));// Execute - 8
  console.log("File read successfylly");// Execute - 6
});
process.nextTick(() => console.log("process")); //Execute - 2
console.log("Last line of the file"); //Execute - 1
