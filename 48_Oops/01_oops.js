// Object Oriented programming

// const { use } = require("react");

// const user = {
//   firstName: "Pravin",
//   lastName: "bhoye",
//   email: "pravin@gmail.com",
//   age: 10,
//   address: "nashik",
//   about: function () {
//     // methods
//     return `${this.firstName} is ${this.age} years old`;
//   },
//   is18: function () {
//     // methods
//     return this.age >= 18;
//   },
// };

// const aboutUser = user.about();
// console.log(aboutUser);

// we make a function take as a input name,lastname, email, age,add.
// (that function create object)
// add key value pair
// object ko return karega

function createUser(firstName, lastName, email, age, address) {
  const user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  user.about = function () {
    return `${this.firstName} is ${this.age} years old`;
  };
  user.is18 = function () {
    return this.age >= 18;
  };
  return user;
}

const user1 = createUser("pravin", "bhoye", "pravin@gmail.com", 24, "nashik");

console.log(user1);
const is18 = user1.is18();
console.log(is18);
const about = user1.about();
console.log(about);
