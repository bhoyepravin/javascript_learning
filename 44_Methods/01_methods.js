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
// const person = {
//   firtName: "pravin",
//   age: 8,
//   about: function () {
//     console.log(`Person name is ${this.firstName} and age is ${this.age}`);
//   },
// };
// person.about();

function personInfo() {
  console.log(`Person name is ${this.firstName} and age is ${this.age}`);
}
const person1 = {
  firstName: "pravin",
  age: 10,
  about: personInfo,
};

const person2 = {
  firstName: "rakesh",
  age: 23,
  about: personInfo,
};

const person3 = {
  firstName: "raj",
  age: 26,
  about: personInfo,
};

//console.log(personInfo);
person1.about();
person2.about();
person3.about();
