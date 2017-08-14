/**
 * @file block-scoping
 * {} is used to define the blocking scoping
 * @see example
 */
//define scope block
{
    let a = 20;
    console.log(a);
    //output 20
}

console.log('---------------');
console.log(a);
//output a is not define. it means a is accessible with block only