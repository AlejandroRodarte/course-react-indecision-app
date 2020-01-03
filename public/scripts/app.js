'use strict';

var square = function square(x) {
    return x * x;
};

// arrow functions are always anonymous; they must always be assigned to a variable
// regular functions can actually be named
var squareArrow = function squareArrow(x) {
    return x * x;
};

// even shorter syntax
var squareArrowNew = function squareArrowNew(x) {
    return x * x;
};

console.log(squareArrowNew(3));

var getFirstName = function getFirstName(fullName) {
    return fullName.split(' ')[0];
};

var getFirstNameNew = function getFirstNameNew(fullName) {
    return fullName.split(' ')[0];
};

console.log(getFirstName('Mike Smith'));
console.log(getFirstNameNew('Mike Smith'));
