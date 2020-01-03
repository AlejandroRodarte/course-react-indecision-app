// this is perfectly fine on var-base variable
// hard to debug when this situation occurs
var nameVar = 'Alejandro';
var nameVar = 'Patricia';

console.log('nameVar', nameVar);

// with let variables, we can assign again another value, but NOT redefine like var-based variables
let nameLet = 'Alejandro';
nameLet = 'Patricia';

console.log('nameLet', nameLet);

// const variables are read-only: are defined and assigned on the same line once
const nameConst = 'Alejandro';

console.log('nameConst', nameConst);


// block-level scoping

var fullName = 'Andrew Mead';

if (fullName) {
    // this var variable is accessible OUTSIDE this block (if statement) code
    // let and const variables are block-level scoped meaning they are NOT accessible outside of for, if and function code blocks
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);