const array = [true, 'hello', 5, 12, -200, false, false, 'word', null, 0.5];

const counter = {};

for (const key of array) {
    const type = typeof key;
    if (!(type in counter)) {
        counter[type] = 0;
    }
    counter[type]++
}

console.log(counter);