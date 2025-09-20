// apply method

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
//  apply
about.apply(user1, ["guitar", "singer"]); // pass in Array
