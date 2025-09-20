// function hello() {
//   console.log("hello world");
// }
// hello();

// in js funtion is object also
// javascript function ===> function + object

// console.log(hello.name);

// you can add your own properties
// hello.myOwnProperty = "very unique value";
// console.log(hello.myOwnProperty);

// name property ---> tells function name

// function provide more usefull properties

// console.log(hello.prototype);

// only functions provide prototype property

// proof
// const hello = ["value"]; // prototype is not present
// prototype is only present in function

// if (hello.prototype) {
//   console.log("prototype is present");
// } else {
//   console.log("prototype is not present");
// }

// add property in prototype

// function hello() {
//   console.log("hello world");
// }

// hello.prototype.abc = "abc";
// hello.prototype.xyz = "xyz";
// hello.prototype.sing = function () {
//   return "Ok sir";
// };
// console.log(hello.prototype.sing());
