// use const for creating array

// const pi = 3.14;
// const pi = 12.5
// console.log(pi);

const fruits = ["apple", "banana"];
fruits.push("grapes");
console.log(fruits);

// → Always use “const” use “let” when you need to reassign variables
// → And avoid using “var”
// → We need to clear things up, like that we should always use “const”.
// If you need to reassign the value to the reserved variable, use “let” Otherwise, never use “var”, and in my programming experience with JavaScript till now, I’ve noticed that I barely use “let”, like only in loops. Otherwise, it’s constantly happening “const”.
// Yes, if you require anything really, just use “const” all the time because of the optimisation.
