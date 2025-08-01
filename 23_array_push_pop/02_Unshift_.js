// unshift add element to start

let fruits = ["apple", "mango", "grapes"];

console.log(fruits);

fruits.unshift("banana");
console.log(fruits);

// shift
// shift remove element from starting
fruits.shift();
console.log(fruits);

// return element
let removedFruit = fruits.shift();
console.log(fruits);
console.log("removed fruits is", removedFruit);

// push or pop is fast as compare to shift or unshift
