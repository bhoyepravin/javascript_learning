// trim()
// toUpperCase()
// toLowerCase()
// slice()

//let firstName = "   Pravin   ";
// trim() method is use for removing whitespace from both ends of a string
//console.log(firstName.length); // 10
//firstName = firstName.trim();
//console.log(firstName); // removes whitespace from both ends
//console.log(firstName.length);
// string is immutable, so we need to assign it back
// means Once a string is created, it cannot be changed (modified) directly.
//firstName = firstName.trim();
//console.log(firstName.length);

//toUpperCase()
// All alpahabets convers into uppercase
//console.log(firstName.toUpperCase());

//firstName = firstName.toUpperCase();
//console.log(firstName);

//toLowerCase

//let firstName = "PrAVIn";

//firstName = firstName.toLowerCase();
//console.log(firstName);

//slice
// if we want paricular characters use slice method

//start index
// end index

// p r a v i n
// 0 1 2 3 4 5

let firstName = "pravin";
let newString = firstName.slice(0, 4); //prav
console.log(newString);
