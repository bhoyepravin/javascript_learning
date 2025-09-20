// arrow function

// const user1 = {
//   firstName: "pravin",
//   age: 8,
//   about: function () {
//     console.log(this.firstName, this.age);
//   },
// };

// user1.about();

const user1 = {
  firstName: "pravin",
  age: 8,
  about: () => {
    console.log(this);
    console.log(this.firstName, this.age);
  },
};

user1.about();
// arrow function ka this nhi hota
// arrow function take this from surrounding ek level upar se
// surrounding means iska this is window
