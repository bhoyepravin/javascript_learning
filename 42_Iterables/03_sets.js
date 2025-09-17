// sets (it is iterable)

// store data
// sets also have itmes own methods
// No index-based access
// Order is not guaranteed
// unique items only (no duplicates allowed)

//const numbers = new Set(); // syntax of Sets

//const numbers = new Set([1, 2, 3]); // Store data in linear objects
// in set no duplicate allowed

//console.log(numbers);

//console.log(numbers[2]); // no idex base access
//const numbers = new Set([1, 4,5, 3]);  // no order gyaranteed

//const item = ["item1", "item2", "item3"];
//const numbers = new Set();
//numbers.add(1);
//numbers.add(2);
//numbers.add(item); // add item array

//numbers.add(["item1", "item2"]);
//numbers.add(["item1", "item2"]); // it allowed beacause is different array store in separete memory

// if (numbers.has(1)) {
//   console.log("1 is present");
// } else {
//   console.log("1 Is not present");
// }

//console.log(numbers);

// for (let number of numbers) {
//   console.log(number);
// }  array is iterable

// extract Unique elemets
// const myArray = [1, 2, 3, 4, 4, 5, 6, 7, 8];
// const uniqueElements = new Set(myArray);
// console.log(uniqueElements);
// console.log(myArray);

// find the length of values
const myArray = [1, 2, 3, 4, 4, 5, 6, 7, 8, 9];
const uniqueElements = new Set(myArray);
let length = 0;

for (let element of uniqueElements) {
  length++;
}

console.log(length);
