/**
 * @file spread-operator
 * spread operator is allow to iterate of the arrays or object
 * * @see example
 */
"use strict";

let a = [1, 2 , 3];
let b = [10, 20, 30];

//if we want to print/extract the value of these two array we have to loop or give the array inde value

//but in ES6 we use spread(...) operation that give me easy output
//example
console.log(...a, ...b);

//output 1, 2, 3, 10, 20, 30

//more use of spread operator
//here define a fuction of unknown argument, we can pass argument as we want
const  spreadArgFuct = function (...c) {
    console.log(c);

}

console.log(spreadArgFuct([1,3,4]));
// or
console.log(spreadArgFuct('10. 20, 30, 100'));
