// arrays

// arrays are mutable

let fruits = ["apple", "mango", "grapes"];
console.log(fruits);
fruits[1] = "banana";
console.log(fruits);

// all refrence types is Objects
// Array is a Object
let obj = {};
console.log(typeof fruits);

console.log(typeof obj);
// check array is or not
console.log(Array.isArray(fruits));

console.log(Array.isArray(obj));
