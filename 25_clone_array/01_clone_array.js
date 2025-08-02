// how to clone array
// how to copy array

// how to cancatenate two arrays

//let array1 = ["item1", "item2"];
//let array2 = array1;
// check array same or not using ===
//console.log(array1 === array2);

// let array1 = ["item1", "item2"];
// let array2 = ["item1", "item2"];

// array1.push("item3");
// console.log(array1 === array2);
// console.log(array1);
// console.log(array2);
// but these method is not use for many store array data

// 3 steps of cloning array
// 1. slice
// let array1 = ["item1", "item2"];
// let array2 = array1.slice(0);
// array1.push("item3");

// console.log(array1 === array2);
// console.log(array1);
// console.log(array2);

// 2. concat
// let array1 = ["item1", "item2"];
// let array2 = [].concat(array1);
// array1.push("item3");

// console.log(array1 === array2);
// console.log(array1);
// console.log(array2);

// new way Spread operator
// 3. [...array1];
let array1 = ["item1", "item2"];
let array2 = [...array1];
array1.push("item3");

console.log(array1 === array2);
console.log(array1);
console.log(array2);
