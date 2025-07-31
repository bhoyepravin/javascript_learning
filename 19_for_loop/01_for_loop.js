// intro to for loop

// print 0 to 9

for (let i = 0; i <= 9; i++) {
  console.log(i);
}

console.log("value of i is", i); // 01_for_loop.js:9 Uncaught ReferenceError: i is not defined
// because let is not access out side of for loop
// var is access out side of for loop
