function store(value) {
  return () => value;
}

function storeWithSetter(initialValue) {
  let value = initialValue;
  
  const getter = () => value;
  getter.set = (newValue) => {
    value = newValue;
  };
  
  return getter;
}

function storeMultiple(...values) {
  return () => values;
}

console.log('=== Тестування функції store() ===\n');

console.log('Тест 1: Зберігання числа');
const read1 = store(5);
const value1 = read1();
console.log('store(5)');
console.log('Результат:', value1);
console.log('Очікується: 5\n');

console.log('Тест 2: Зберігання рядка');
const read2 = store('Hello, World!');
const value2 = read2();
console.log('store("Hello, World!")');
console.log('Результат:', value2);
console.log('Очікується: "Hello, World!"\n');

console.log('Тест 3: Зберігання об\'єкта');
const obj = { name: 'John', age: 30 };
const read3 = store(obj);
const value3 = read3();
console.log('store({ name: "John", age: 30 })');
console.log('Результат:', value3);
console.log('Очікується: { name: "John", age: 30 }\n');

console.log('Тест 4: Зберігання масиву');
const arr = [1, 2, 3, 4, 5];
const read4 = store(arr);
const value4 = read4();
console.log('store([1, 2, 3, 4, 5])');
console.log('Результат:', value4);
console.log('Очікується: [1, 2, 3, 4, 5]\n');

console.log('Тест 5: Зберігання функції');
const fn = () => 'I am a function';
const read5 = store(fn);
const value5 = read5();
console.log('store(() => "I am a function")');
console.log('Результат:', value5());
console.log('Очікується: "I am a function"\n');

console.log('Тест 6: Множинні виклики повертають одне і те саме значення');
const read6 = store(42);
console.log('Перший виклик:', read6());
console.log('Другий виклик:', read6());
console.log('Третій виклик:', read6());
console.log('Всі виклики повертають: 42\n');

console.log('Тест 7: Зберігання null і undefined');
const read7a = store(null);
const read7b = store(undefined);
console.log('store(null) =', read7a());
console.log('store(undefined) =', read7b());

console.log('\n=== Розширена версія з setter ===\n');

console.log('Тест 8: storeWithSetter - читання і запис');
const readWrite = storeWithSetter(10);
console.log('Початкове значення:', readWrite());
readWrite.set(20);
console.log('Після readWrite.set(20):', readWrite());
readWrite.set(30);
console.log('Після readWrite.set(30):', readWrite());

console.log('\n=== Версія з множинними значеннями ===\n');

console.log('Тест 9: storeMultiple - зберігання декількох значень');
const readMany = storeMultiple(1, 2, 3, 4, 5);
console.log('storeMultiple(1, 2, 3, 4, 5)');
console.log('Результат:', readMany());

console.log('\n=== Практичний приклад: конфігурація ===\n');

const config = store({
  host: 'localhost',
  port: 3000,
  debug: true
});

console.log('Конфігурація:', config());
console.log('Порт:', config().port);
console.log('Режим відлагодження:', config().debug);