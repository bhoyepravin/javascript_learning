// map object

// map is an iterable
// store data in ordered fashion

// store key value pair (Like object)
// duplicate keys are not allowed like objects

// different between maps and objects

// objects can only have string or symbol
// as key

// in maps you can use anything as key
// Like array, number, string

// object literal
// key --> string
// key --> symbol

// const person = {
//   firstName: "pravin",
//   age: 10,
//   1: "one",
// };

// console.log(person[1]);
// for (let key in person) {
//   console.log(typeof key);
// }

// key value paire

// const person = new Map();
// person.set("firstName", "pravin"); //kye value pair
// person.set("age", 7);
// person.set(1, "one");
// console.log(person);

// how to access key value pair
//console.log(person.firstName);  object method undefined

// console.log(person.get(1));
// console.log(person.keys());

// using loop print key
// for (let key of person.keys()) {
//   console.log(key, typeof key);
// }

// for of loop in map
// for (let key of person) {
//   console.log(key);
// }

// for (let key of person) {
//   console.log(Array.isArray(key));
// }

// destructuring
// for (let [key, value] of person) {
//   console.log(key, value);
// }

// const person = new Map([
//   ["firstName", "pravin"],
//   ["age", 7],
// ]);

// console.log(person);

const person1 = {
  id: 1,
  firstName: "Pravin",
};

const person2 = {
  id: 2,
  firstName: "bhoye",
};

const extraInfo = new Map();
extraInfo.set(person1, { age: 8, gender: "male" });
extraInfo.set(person2, { age: 9, gender: "female" });

console.log(person1.id);
console.log(extraInfo.get(person1).gender);
console.log(extraInfo.get(person2).gender);
