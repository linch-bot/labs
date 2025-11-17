function iterate(object, callback) {
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      callback(key, object[key], object);
    }
  }
}

function iterateKeys(object, callback) {
  Object.keys(object).forEach(key => {
    callback(key, object[key], object);
  });
}

function iterateEntries(object, callback) {
  Object.entries(object).forEach(([key, value]) => {
    callback(key, value, object);
  });
}

console.log('=== Тестування функції iterate() ===\n');

console.log('Тест 1: Ітерація простого об\'єкта');
const obj1 = { a: 1, b: 2, c: 3 };
console.log('Об\'єкт:', obj1);
console.log('Результат:');
iterate(obj1, (key, value) => {
  console.log({ key, value });
});

console.log('\nТест 2: Ітерація з використанням всіх параметрів');
const obj2 = { x: 10, y: 20, z: 30 };
console.log('Об\'єкт:', obj2);
console.log('Результат з доступом до об\'єкта:');
iterate(obj2, (key, value, object) => {
  console.log(`${key}: ${value} (об'єкт містить ${Object.keys(object).length} ключів)`);
});

console.log('\nТест 3: Ітерація об\'єкта з рядковими значеннями');
const obj3 = { name: 'John', city: 'New York', country: 'USA' };
console.log('Об\'єкт:', obj3);
console.log('Результат:');
iterate(obj3, (key, value) => {
  console.log(`${key} => ${value}`);
});

console.log('\nТест 4: Порожній об\'єкт');
const obj4 = {};
console.log('Об\'єкт:', obj4);
console.log('Результат:');
iterate(obj4, (key, value) => {
  console.log({ key, value });
});
console.log('(нічого не виведено - об\'єкт порожній)');

console.log('\nТест 5: Об\'єкт з різними типами значень');
const obj5 = { 
  num: 42, 
  str: 'hello', 
  bool: true, 
  arr: [1, 2, 3],
  obj: { nested: 'value' }
};
console.log('Об\'єкт:', obj5);
console.log('Результат:');
iterate(obj5, (key, value) => {
  console.log(`${key}: ${JSON.stringify(value)} (${typeof value})`);
});

console.log('\n=== Альтернативна реалізація з Object.keys() ===\n');

console.log('Тест 6: iterateKeys()');
const obj6 = { a: 1, b: 2, c: 3 };
iterateKeys(obj6, (key, value) => {
  console.log({ key, value });
});

console.log('\n=== Альтернативна реалізація з Object.entries() ===\n');

console.log('Тест 7: iterateEntries()');
const obj7 = { a: 1, b: 2, c: 3 };
iterateEntries(obj7, (key, value) => {
  console.log({ key, value });
});

console.log('\n=== Практичний приклад: сума значень ===\n');

const numbers = { first: 10, second: 20, third: 30 };
let sum = 0;
iterate(numbers, (key, value) => {
  sum += value;
});
console.log('Об\'єкт:', numbers);
console.log('Сума значень:', sum);