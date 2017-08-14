/**
 * @file destructuring Assigment Array
 *
 * Descructuring Assignment Object allows extract data from Object to the the variables
 *
 * @see example
 */

"use strict";

let person = {
    firstName: 'Ranjeet',
    middleName: 'kumar',
    lastName:'Mahto'
};

//assign object properties to the variable
let {firstName, middleName, lastName} = person;
console.log(firstName, middleName, lastName);