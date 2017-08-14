/**
 * @file template-literals
 * in es6 we user `` and ${} to cancate the variables and parse
 * * @see example
 */
"use strict";

let firstName = 'Ranjeet';
let lastName = "Kumar";

//if we want to cancate these two string In Js we do

let fullname = firstName + ' ' + lastName;
console.log(fullname); //output Ranjeet kumar

//in ES we do it in simeple way

let fullname1 = `${firstName} ${lastName}`;
console.log(fullname1); //output Ranjeet kumar