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
};

let difference = (arr1, arr2) => {
  let res = [];
  let arr1Copy = [...arr1];
  let arr2Copy = [...arr2];
  for (let el of arr1Copy) {
    if (!arr2Copy.includes(el)) {
      res.push(el);
    } else {
      removeElement(arr2Copy, el);
    }
  }
  return res;
};


const array1 = [7, -2, 10, 10, 5, 0];
const array2 = [0, 10];
const result = difference(array1, array2);
console.log(result);