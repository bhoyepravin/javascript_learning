// const userMethods = {
//   about: function () {
//     return `${this.firstName}is${this.age} years old`;
//   },
//   is18: function () {
//     return this.age >= 18;
//   },
//   sing: function () {
//     return "hello";
//   },
// };

function createUser(firstName, lastName, email, age, address) {
  const user = Object.create(createUser.prototype);
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;

  return user;
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
const user1 = createUser("pravin", "bhoye", "pravin@gmail.com", 24, "nashik");
const user2 = createUser("mayur", "more", "more@gmail.com", 24, "nashik");
const user3 = createUser("pravin", "demo1", "hello@gmail.com", 24, "nashik");
const user4 = createUser("raju", "demo", "ok@gmail.com", 24, "nashik");
console.log(user1);
console.log(user1.about());
console.log(user3.sing());
