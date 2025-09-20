// bind

// function about(hobby, favMusician) {
//   console.log(this.firstName, this.age, hobby, favMusician);
// }

// const user1 = {
//   firstName: "pravin",
//   age: 9,
// };

// const user2 = {
//   firstName: "Raju",
//   age: 10,
// };

// about.bind(user1, "guitar", "singer");
// const func = about.bind(user1, "guitar", "pravin");
// func();

// don't do this mistake

const user1 = {
  firstName: "pravin",
  age: 9,
  about: function () {
    console.log(this.firstName, this.age);
  },
};

// const myFunct = function () {
//   console.log(this.firstName, this.age);
// };

// myFunct();   print undefined undefined
// this keyword call window

// do this
const myFunct = user1.about.bind(user1);
myFunct();
