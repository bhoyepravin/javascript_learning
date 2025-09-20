// getter and setters

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  set fullName(fullName) {
    const [firstName, lastName] = fullName.split(" "); // destructuring
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person1 = new Person("Pravin", "Bhoye", 5);
// console.log(person1.fullName); // use like property getter method

// console.log(person1.firstName);
// console.log(person1.lastName);
person1.fullName = "Akshay bhoye";
console.log(person1);
//console.log(person1.fullName);
