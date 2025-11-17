"use strict";

const max = (matrix) => {
  let value = matrix[0][0];

  for (const row of matrix) {
    for (const item of row) {
      if (item > value) {
        value = item;
      }
    }
  }

  return value
};

const m = max([
  [1, 2, 3],
  [4, 5, 6],
  [7, 10, 9],
]);
console.log(m); // 10

module.exports = { max };