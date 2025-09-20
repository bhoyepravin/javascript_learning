function createUser(firstName, lastName, email, age, address) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.age = age;
  this.address = address;

  //return user;
}
createUser.prototype.about = function () {
  return `${this.firstName}is${this.age} years old`;
};

createUser.prototype.is18 = function () {
  return this.age >= 18;
};

createUser.prototype.sing = function () {
  return "hello pravin";
};

console.log(createUser.prototype);
const user1 = new createUser(
  "pravin",
  "bhoye",
  "pravin@gmail.com",
  24,
  "nashik"
);
const user2 = new createUser("mayur", "more", "more@gmail.com", 24, "nashik");
const user3 = new createUser(
  "pravin",
  "demo1",
  "hello@gmail.com",
  24,
  "nashik"
);
const user4 = new createUser("raju", "demo", "ok@gmail.com", 24, "nashik");
// console.log(user1);
// console.log(user1.is18());

// for (let key in user1) {
//   console.log(key);
// }

for (let key in user1) {
  if (user1.hasOwnProperty(key)) {
    console.log(key);
  }
}
