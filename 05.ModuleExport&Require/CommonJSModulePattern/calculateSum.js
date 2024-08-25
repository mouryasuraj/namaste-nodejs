

let x = "Hello World!!!"

const calculateSum = (a,b) =>{
    return a+b;
}

console.log(module.exports); // This is an empty object like {}
// Some peaple also write like this.
module.exports.x = x;
module.exports.calculateSum = calculateSum;

console.log(module.exports.x);




// module.exports = calculateSum;
// module.exports = {calculateSum,x};