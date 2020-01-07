// named import
import { square, add } from './utils';

import { isAdult, canDrink } from './person';

console.log('app.js is running');
console.log(square(5));
console.log(add(3, 8));

console.log(isAdult(17));
console.log(isAdult(19));

console.log(canDrink(20));
console.log(canDrink(22));