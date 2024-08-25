require("./other.js")  //Require is used to import module or run that file. It can only execute that file but we cannot have access to their variables, functions, etc. by simple writing require.

const {calculateSum,x} = require("./calculateSum.js")  //Before require, you have to export it first

let a = 10;
let b = 20;
console.log(calculateSum(a,b));
console.log(x);
