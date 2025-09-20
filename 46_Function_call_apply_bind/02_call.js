// const user1 = {
//   firstName: "pravin",
//   age: 9,
//   about: function (hobby, favMusician) {
//     console.log(this.firstName, this.age, hobby, favMusician);
//   },
// };

// const user2 = {
//   firstName: "Raju",
//   age: 10,
// };

// user1.about.call(user2, "guitar", "singer");

// 2nd step using function

function about(hobby, favMusician) {
  console.log(this.firstName, this.age, hobby, favMusician);
}

const user1 = {
  firstName: "pravin",
  age: 9,
};

const user2 = {
  firstName: "Raju",
  age: 10,
};

about.call(user1, "guitar", "singer");
