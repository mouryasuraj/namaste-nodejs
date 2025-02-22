// 'use strict'

let b = 10;
function s() {
    let a = 5;
    console.log(a,b);
    console.log(this);    // Output: undefined (in strict mode) or global object (non-strict mode)
}

s()


const obj = {
    a:20,
    x:function(){
        console.log(this.a);
    },
    s:s // function s becomes method here
}
obj.x()
obj.s()

const methodBecomesFunctionWithoutThis = obj.x // Here, method becomes a function but "this" is not accessible in this way
const methodBecomesFunctionWithThis = obj.x.bind(obj) // Here, method becomes a function, now we used bind function to get the access of that object and now method becomes a function
console.log("methodBecomesFunction1",methodBecomesFunctionWithoutThis());
console.log("methodBecomesFunction2",methodBecomesFunctionWithThis());



