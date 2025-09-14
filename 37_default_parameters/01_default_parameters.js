// default parameters

// function addTwo(a, b) {
//   if (typeof a === "undefined") {
//     b = 0;
//   }
//   return a + b;
// }

// const ans = addTwo(4);
// console.log(ans);

function addTwo(a, b = 0) {
  return a + b;
}

const ans = addTwo(4);
console.log(ans);
