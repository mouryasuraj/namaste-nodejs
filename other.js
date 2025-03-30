const a = 20;
const b = 20;

const calculateSum = (a,b) => {
  const sum = a + b;
  return sum;
};
// console.log(module.exports);

module.exports = { a, b, calculateSum };    //CJS
// export {a,b, calculateSum}     //MJS
// console.log(module.exports);



