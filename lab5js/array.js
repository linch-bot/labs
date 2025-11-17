const array = () => {
    let list = [];
    const base = (index) => list[index];
    base.push = (item) => list.push(item);
    base.pop = () => list.pop();
    return base;
};

const arr = array();
arr.push('first');
arr.push('second');
arr.push('third');
console.log(arr(0));
console.log(arr(1));
console.log(arr(2));
console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());