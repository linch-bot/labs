'use strict';

const methods = (iface) => {
    const names = [];
    for (const key in iface) {
    const fn = iface[key];
    if (typeof fn === 'function') {
      names.push([key, fn.length]);
    }
  }
  return names;
};

const objects = {
  m1: (x) => [x],
  m2: (x, y) => [x, y],
  m3: (x, y, z) => [x, y, z],
};

console.log(JSON.stringify(methods(objects)));