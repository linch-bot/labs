"use strict";

const sum = (...args) => args.reduce((sum, num, i) => sum + num, 0);

console.log(sum(1, 2, 3));

module.exports = { sum };