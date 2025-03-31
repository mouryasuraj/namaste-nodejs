const fs = require("fs");

const a = 100;

setImmediate(() => console.log("setImmediate called"));// Execute - 4

fs.readFile("./file.txt", () => {
  console.log("File readed successfully");// Execute - 5
});

setTimeout(() => {
  console.log("setTimeout is executed");// Execute - 3
}, 0);

function A() {
  console.log("Function A is called", a);// Execute - 1
}

A();
console.log("Last line of code"); // Execute - 2
