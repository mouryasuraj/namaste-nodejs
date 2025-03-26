let a = 10;
let b = 20

const result = a+b;

console.log(result);


// Way to export
// 1.
// module.exports.a = a;
// module.exports.b = b;
// module.exports.result = result;

// 2.
// module.exports = {
//     a:a,
//     b:b,
//     result:result
// }

// 3
module.exports = {a, b, result}