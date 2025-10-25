'use strict';

const average = (a, b) => (a + b) / 2;

const square = (c) => c * c;

const cube = (c) => c * c * c;

const calculate = () => {
  const array = [];
  for (let n = 0; n <= 9; n++) {
    const result = average(square(n), cube(n));
    array.push(result);
  }
  return array;
};

console.log(calculate());