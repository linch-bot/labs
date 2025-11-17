let unique = (arr) => {
    let res = [];
    for (let el of arr) {
        if (!res.includes(el)) {
            res.push(el);
        }
    }
    return res;
};

const result = unique([2, 1, 1, 3, 2]);
console.log(result);