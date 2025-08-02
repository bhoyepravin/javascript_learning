// for in loop in array

// const fruits = ["apple", "mango", "grapes", "fruits"];
// const fruits2 = [];

// for (let index in fruits) {
//   console.log(fruits[index]);
// }

const fruits = ["apple", "mango", "grapes", "fruits"];

const fruits2 = [];

for (let index in fruits) {
  fruits2.push(fruits[index].toUpperCase());
}
console.log(fruits2);

// traditional for loop
// mostly used these loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
