// map method

// const numbers = [3, 5, 6, 3, 9, 7];

// const square = function (number) {
//   return number * number;
// };

// const squareNumber = numbers.map(square);
// console.log(squareNumber);

// when you are use map function use return
// return something otherwise ans show undefined

// const numbers = [3, 5, 6, 3, 9, 7];

// const square = function (number) {
//   console.log(number * number);
// };

// const squareNumber = numbers.map(square);
// console.log(squareNumber);

// using arrow function

// const numbers = [3, 4, 6, 1, 8];

// const squareNumber = numbers.map((number) => {
//   return number * number;
// });

// console.log(squareNumber);

// using template string method

// const numbers = [1, 3, 6, 5, 4, 6];

// const squareNumber = numbers.map((number, index) => {
//   return `index: ${index}, ${number * number}`;
// });

// console.log(squareNumber);

// realistic example
// make one array store users name

const users = [
  { firstname: "pravin", age: "24" },
  { firstname: "pravin", age: "24" },
  { firstname: "pravin", age: "24" },
  { firstname: "pravin", age: "24" },
  { firstname: "pravin", age: "24" },
];

userNames = users.map((user) => {
  return user.firstname;
});

console.log(userNames);
