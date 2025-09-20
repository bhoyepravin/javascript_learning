const user1 = {
  firstName: "pravin",
  age: 9,
  about: function () {
    console.log(this.firstName, this.age);
  },
};

const user2 = {
  firstName: "Raju",
  age: 10,
};

//user1.about.call(user2);
user1.about.call(user1);
//user1.about.call();  undefined undefined
