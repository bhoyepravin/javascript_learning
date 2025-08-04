// difference between dot and bracket notation

// // 1st way : using bracket notation
// const person = {
//   name: "pravin",
//   age: 26,
//   "person hobbies": ["book reading", "sleeping", "coding"],
// };

// console.log(person["person hobbies"]);

// 2nd way : using dot notation
const key = "email";
const person = {
  name: "pravin",
  age: 26,
  "person hobbies": ["book reading", "sleeping", "coding"],
};

//console.log(person["person hobbies"]);
//person["key"] = "pravinbhoye@gmail.com";  // wrong way
person[key] = "pravinbhoye@gmail.com"; // right way
console.log(person);
