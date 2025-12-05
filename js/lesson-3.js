// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [1, 2, 3, 4, 5];

// const newNumber = numbers.map(number => number ** 2);

// const newNumber = (array, pow) => array.map(number => (Math.pow(number, pow));
// console.log(newNumber);

// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

const data = [
  { id: 1, values: [1, 2, 3] },
  { id: 2, values: [4, 5, 6] },
  { id: 3, values: [7, 8, 9] },
];

const newData = array => array.flatMap(object => object.values);
console.log(newData(data));

// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

const people = [
  { name: 'John', age: 27 },
  { name: 'Jane', age: 31 },
  { name: 'Bob', age: 19 },
];

const checkAge = (array, age) => array.some(person => person.age < age);
console.log(checkAge(people, 20));

// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];

// const checkNumber = (array, value) =>
//   array.every(number => number % value === 0);
// console.log(numbers, 2);

// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];

// const findPair = array => array.find(number => number % 2 !== 0);
// console.log(findPair(numbers));

// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];

// const newNumbers = array =>
//   array.toSorted((firstNumber, secondNumber) => firstNumber - secondNumber);
// console.log(newNumbers(numbersArray));

// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ['banana', 'orange', 'apple', 'pear'];

// const sortedArray = stringArray.toSorted((word1, word2) =>
//   word1.localCompare(word2)
// );

// console.log(sortedArray);

//  Відсортуйте масив об'єктів за віком у порядку зростання.
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// const sortUsers = array => array.toSorted((a, b) => a.age - b.age);
// console.log(sortUsers(users));

// Дано масив об'єктів.
// Створіть новий масив, що містить тільки об'єкти, в яких
// вік більше 20 років.
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const users = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// const filterUsers = (arr, age) => arr.filter(user => user.age > age);
// console.log(filterUsers(users, 20));

// Дано масив чисел [1, 2, 3, 4, 5].
// Застосуйте метод для обчислення суми елементів масиву.

// const numbers = [1, 2, 3, 4, 5];

// const numberSum = arr => arr.reduce((acc, number) => (acc += number), 0);
// console.log(numberSum(numbers));

//Підрахунок кількості повторень
//Дано масив:
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
// //Завдання: За допомогою reduce підрахуйте, скільки разів кожен фрукт зустрічається в масиві.
// //Очікуваний результат:
// //{
//  // apple: 3,
//  // banana: 2,
//  // orange: 1
// //}

const fruitsAmount = arr =>
  arr.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    console.log(acc);
    return acc;
  }, {});

console.log(fruitsAmount(fruits));
