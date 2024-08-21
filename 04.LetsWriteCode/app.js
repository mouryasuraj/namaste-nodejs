const name = "Namaste NodeJS";

console.log(name);

// console.log(global) //Here in node js this refer to empty object {} and in browser this keyword refer to window object


// We have nodejs and inside nodejs, there is an V8 Engine + Some api's, so global is not a part of V8 engine it is an api's or one of the super power of nodejs

// Interesting thing about global object
// In browser, lots of keyword refer to the global object like this, window, self, frames. So openjs foundation decided to give the common keyword to refer the global object in every where. "globalThis"

console.log(globalThis);
console.log(globalThis === global);


