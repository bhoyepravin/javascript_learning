// important array methods
// for each method
const numbers = [4, 2, 5, 8];

// function myFunc(number, index) {
//   console.log(`index is", ${index} number is ${number}`);
//   //   console.log(`${number}*2 = ${number * 2}`);
// }

// multiplyBy2(numbers[0], 0);
// multiplyBy2(numbers[1], 1);

// for (let i = 0; i < numbers.length; i++) {
//   myFunc(numbers[i], i);
// }

// numbers.forEach(function (number, index) {
//   console.log(`index is, ${index} number is ${number}`);
// });

// numbers.forEach(function (number, index) {
//   console.log(number * 3, index);
// });

const users = [
  { firstName: "pravin", age: 24 },
  { firstName: "raju", age: 25 },
  { firstName: "rakesh", age: 23 },
  { firstName: "ramesh", age: 32 },
];

// users.forEach(function (users) {
//   console.log(users.firstName);
// });

users.forEach((user, index) => {
  console.log(user.firstName, index);
});

// for (let user of users) {
//   console.log(user.firstName);
// }
