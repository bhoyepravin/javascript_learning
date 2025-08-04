// objects

// objects is reference type

// arrays are good but not sufficient
// for real world data
// objests store key value pairs
// objects don't have index

// how to create objects

// const person = { name: "Pravin", age: 22 };
// console.log(person);

const person = {
  name: "Pravin",
  age: "26",
  hobbies: ["book reading", "sleeping", "coding"],
};
console.log(person);

console.log(person.hobbies);

// how to access data from objects
// console.log(person.name);    using dot notation
console.log(person["name"]); //bracket notation
// console.log(person.age);     using dot notation
console.log(person["age"]); // bracket notation
//console.log(person.hobbies);   access data using dot notation

// how to add key value pairs to objects
// person.gender = "male";     add data using dot notation
person["gender"] = "male"; // add data using bracket notation
console.log(person);
