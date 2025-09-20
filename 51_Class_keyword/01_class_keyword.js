// class keyword
// class are fake
class createUser {
  constructor(firstName, lastName, email, age, address) {
    console.log("Constructor Called");
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
  }
  about() {
    return `${this.firstName}is${this.age} years old`;
  }

  is18() {
    return this.age >= 18;
  }

  sing() {
    return "hello pravin";
  }
  func(a) {
    console.log(a);
  }
}

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

//console.log(user1.firstName);

// check prototype
//console.log(Object.getPrototypeOf(user1));
// user1.func(12);
