const fs = require("fs")
const a = 100;

setImmediate(()=> console.log("Immediate called")) //Execute - 6

Promise.resolve("Promise").then(console.log) //Execute - 4

fs.readFile("./file.txt", () =>{
    console.log("File readed successfully"); //Execute - 7
})

setTimeout(() => {
    console.log("setTimeout is called"); //Execute - 5
}, 0);

process.nextTick(()=> console.log("Process is executed")) //Execute - 3

const func = () =>{
    console.log("A", a);   //Execute - 1
}
func()
console.log("Last line of the file"); //Execute - 2
