/**
 * let is used in place of var in es6, it is also block scoping variable see example
 */

let a = 5;
console.log(a);
//output 5

//block scope
{
    let a = 7;
    console.log(a);
    //output 7
}

console.log('-------------------');
console.log(a);
//output 5