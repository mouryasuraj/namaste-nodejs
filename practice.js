const { a: firstNo, b: secondNo, calculateSum } = require("./other.js");    //CJS
// import { a as firstNo, b as secondNo, calculateSum } from "./other.js";  //MJS
 
const result = calculateSum(firstNo, secondNo);
// console.log(result);



const sum = () =>{
    console.log(this);
}
sum()

const obj = {
    a:10,
    x:function(){
        console.log(this.a);  
        return this.a
    },
    s:sum
}
obj.x()
obj.s()

const methodAsFunction = obj.x.bind(obj)
console.log("methodAsFunction",methodAsFunction());
