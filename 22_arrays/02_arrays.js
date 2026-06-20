// arrays

// arrays are mutable mean we can change the value of array

let fruits = ["apple", "mango", "grapes"];
console.log(fruits);
fruits[1] = "banana";
console.log(fruits);

// all refrence types is Objects
// Array is a Object
let obj = {};    //object literal
console.log(typeof fruits);

console.log(typeof obj);
// check array is or not
console.log(Array.isArray(fruits));

console.log(Array.isArray(obj));
