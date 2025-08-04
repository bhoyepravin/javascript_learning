// how to iterate object

const person = {
  name: "pravin",
  age: 25,
  "person hobbies": ["guitar", "sleeping", "listning songs"],
};

// 1st way to iterate object
// for in loop

// for (let key in person) {
//   console.log(person[key]);
// }

// using template string
// for (let key in person) {
//   console.log(`${key} : ${person[key]}`);
// }

// 2nd way to iterate object
// object.keys

// console.log(typeof Object.keys(person));
// const val = Array.isArray(Object.keys(person));
// console.log(val);

for (let key of Object.keys(person)) {
  console.log(person[key]);
}
