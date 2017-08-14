/**
 * @file spread operator
 * spread with object
 * * @see example
 */
"use strict";

const name = {
    firstName: 'Ranjeet',
    lastName: 'kumar'
}

const address = {
    city: 'panaji',
    country: 'India',
    village: 'Sangolda'
}

//Concating two object using spread operator
const person = {...name, ...address};
console.log(person);