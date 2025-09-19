// methods

// function inside object

// const person = {
//   firtName: "pravin",
//   age: 8,
//   about: function () {
//     console.log("Person name is pravin and age is 8");
//   },
// };
// person.about();

// using template string
const person = {
  firtName: "pravin",
  age: 8,
  about: function () {
    console.log(`Person name is ${this.firstName} and age is ${this.age}`);
  },
};
person.about();
