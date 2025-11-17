const array = [1, 2, 3, 4, 5, 6, 7];

let removeElement = (arr, value) => {
    res = [];
    for (let el of arr) {
        if (el !== value) {
            res.push(el);
        }
    }
    let a = arr.length;
    for (let i = 0; i < a; i++) {
        arr.pop();
    }
    for (let el of res) {
        arr.push(el);
    }
    return arr;
}

let removeElements = (arr, ...values) => {
    for (let v of values) {
        removeElement(arr, v);
    }
}

removeElement(array, 5);
console.log(array);

const arrays = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElement(arrays, 'Lima'); // удалит 'Lima' из массива
removeElement(arrays, 'Berlin'); // не удалит ничего
console.log(arrays);

removeElements(array, 5, 1, 6);
console.log(array);