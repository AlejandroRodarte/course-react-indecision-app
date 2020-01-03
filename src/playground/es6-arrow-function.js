const square = function(x) {
    return x * x;
};

// arrow functions are always anonymous; they must always be assigned to a variable
// regular functions can actually be named
const squareArrow = (x) => {
    return x * x;
};

// even shorter syntax
const squareArrowNew = x => x * x;

console.log(squareArrowNew(3));

const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
};

const getFirstNameNew = fullName => fullName.split(' ')[0];

console.log(getFirstName('Mike Smith'));
console.log(getFirstNameNew('Mike Smith'));