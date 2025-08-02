// for loop in array

let fruits = ["mango", "banana", "grapes", "apple"]; //print all elements separatly

//lenght property is most imp in array   console.log(fruits.length);

// console.log(fruits.length);
// console.log(fruits[2]);

//console.log(fruits[fruits.length - 2]); // elements from last

let fruits2 = [];

for (let i = 0; i < fruits.length; i++) {
  fruits2.push(fruits[i].toUpperCase());
}

console.log(fruits2);

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits);
// }
