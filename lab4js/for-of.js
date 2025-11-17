'use strict';

const sum = (...args) => {
 
  let sum = 0;

  for (const num of args) {
    sum += num
  }

  return sum
};

console.log(sum(1, 2, 3))

module.exports = { sum };