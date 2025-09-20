const userMethods = {
  about: function () {
    return `${this.firstName}is${this.age} years old`;
  },
  is18: function () {
    return this.age >= 18;
  },
  sing: function () {
    return "hello";
  },
};

function createUser(firstName, lastName, email, age, address) {
  const user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  user.about = userMethods.about;
  user.is18 = userMethods.is18;
  user.sing = userMethods.sing;
  return user;
}

const user1 = createUser("pravin", "bhoye", "pravin@gmail.com", 24, "nashik");
const user2 = createUser("mayur", "more", "more@gmail.com", 24, "nashik");
const user3 = createUser("pravin", "demo1", "hello@gmail.com", 24, "nashik");
const user4 = createUser("raju", "demo", "ok@gmail.com", 24, "nashik");

console.log(user1.about());
console.log(user3.sing());
