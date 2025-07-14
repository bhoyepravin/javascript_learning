// undefined
// null
// undefined means we create variable but not assign a value.
// when use let show undefined
// when use var show undefined
//but
// using const throw an error.

// let firstName;
// console.log(typeof firstName);
// firstName = "Pravin";
// console.log(typeof firstName, firstName); // Pravin

// null

// let firstName = null;
// console.log(firstName);
// firstName = "Pravin";
// console.log(firstName, typeof firstName);

console.log(typeof null); // object

//objet is a reference datatype in js
// bug, error

// BigInt primitive datatype
let number = 123;
console.log(number); // in js store no in a LIMIT
console.log(Number.MAX_SAFE_INTEGER); // check number store limits

// if store 9007199254740991 more than these no use BigIntl

//let num = BigInt(90071992547409121221);
//console.log(num);

// There are two way's of using BigInt
//1. BigInt
//2. after no add n eg.123n

let num1 = BigInt(123);
let num2 = 12n;

let add = num1 + num2;
console.log(add);
