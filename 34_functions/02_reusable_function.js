//dry - Dont Reapeat Yourself

// function twoPlusFour() {
//   return 2 + 4;
// }

// const returnedValue = twoPlusFour();
// console.log(returnedValue);

// Reusable Function
// function sumTwoNumbers(number1, number2) {
//   return number1 + number2;
// }

// const returnedValue = sumTwoNumbers(45, 65);
// console.log(returnedValue);

// 1st
// isEven
// input :1 number
// output : true, false

// function isEven(number) {
//   if (number % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isEven(3));

// 2nd Make function small
// function isEven(number) {
//   return number % 2 === 0;
// }

// console.log(isEven(2));

// 2nd function

// input : string
// output : firstCharacter

// function firstChar(anyString) {
//   return anyString[0];
// }

// console.log(firstChar("abc"));

// 3rd function
// input : array, target (number)
// output : index of target if target present in array

function findTarget(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}

const myArray = [1, 3, 8, 90];
const ans = findTarget(myArray, 3);
console.log(ans);
