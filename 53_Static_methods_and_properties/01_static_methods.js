// static methods
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  static classInfo() {
    return "this is person class";
  }

  static desc = "static property";

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
const info = Person.classInfo();
console.log(info);

console.log(Person.desc);
