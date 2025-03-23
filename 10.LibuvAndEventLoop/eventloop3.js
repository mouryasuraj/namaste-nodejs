const fs = require("fs");

setImmediate(() => console.log("Immediate"));

setTimeout(() => console.log("Time"), 0);

Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt", "utf8", () => {
  setTimeout(() => console.log("2nd Timer"), 0);
  process.nextTick(() => console.log("2nd process"));
  setImmediate(() => console.log("2nd Immediate"));
  console.log("File read successfylly");
});
process.nextTick(() => console.log("process"));
console.log("Last line of the file");
