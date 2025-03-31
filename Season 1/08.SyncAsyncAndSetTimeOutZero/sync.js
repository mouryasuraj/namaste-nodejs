console.log("Hello World!!!");

const a = 1000000;
const b = 123456;

function multiply(a,b){
    const result = a * b;
    return result;
}

console.log("Before Function");
const c = multiply(a,b)
console.log("After Function");

console.log(`Multiplication of ${a} and ${b} is: ${c}`);

