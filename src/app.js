// named import
import subtract, { square, add } from './utils';

import isSenior, { isAdult, canDrink } from './person';

console.log('app.js is running');
console.log(square(5));
console.log(add(3, 8));
console.log(subtract(5, 2));

console.log(isAdult(17));
console.log(isAdult(19));

console.log(canDrink(20));
console.log(canDrink(22));

console.log(isSenior(64));
console.log(isSenior(66));