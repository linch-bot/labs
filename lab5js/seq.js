'use strict';

const seq = (args) => {
    let fns = [];
    const func = (fn) => {
        if (typeof fn === "number") return fns.reverse().reduce((acc, obj) => obj(acc), fn);
        fns.push(fn);
        return func;
    };
    return func(args);
};

console.log(seq(x => x + 7)(x => x * 2)(5));
console.log(seq(x => x * 2)(x => x + 7)(5));
console.log(seq(x => x + 1)(x => x * 2)(x => x / 3)(x => x - 4)(7));