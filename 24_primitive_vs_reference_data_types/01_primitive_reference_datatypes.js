// primitive vs reference data types

// primitive data types
// let num1 = 6;
// let num2 = num1;

// console.log("value is num1 is", num1);
// console.log("value is num2 is", num2);
// num1++;
// console.log("after incrementing num1");
// console.log("Value is num1 is", num1);
// console.log("value is num2 is", num2);

// reference types

// array

let array1 = ["item1", "item2"];
let array2 = array1;
console.log("array1", array1);
console.log("array2", array2);

array1.push("item3");
console.log("array1", array1);
console.log("array2", array2);

//In JavaScript, a stack is a data structure, when we talk about stacks in JavaScript, we refer to a collection of elements that follow a specific order for adding and removing items. This order is known as “Last In, First Out” (LIFO). Think of a stack of plates. You add plates to the top and take them off from the top too. This is the core idea behind a stack in programming — the last thing you put in is the first thing you take out.
