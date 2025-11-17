'use strict';

const sum = (...args) => {

  let sum = 0

  while (args.length > 0) {
    sum += args.pop()
  }

  return sum
};

console.log(sum(1, 2, 3))

module.exports = { sum };