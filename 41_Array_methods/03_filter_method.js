// filter method

// filter even numbers
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const isEven = function (number) {
//   return number % 2 === 0;               // true or false
// };

// const evenNumbers = numbers.filter(isEven);
// console.log(evenNumbers);

// filter odd numbers

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isOdd = function (number) {
  return number % 2 !== 0;
};

const oddNumber = numbers.filter(isOdd);
console.log(oddNumber);
