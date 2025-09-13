// function expression

// function singHappyBirthday() {
//   console.log("Happy birthday to you.......");
// }

const singHappyBirthday = function () {
  console.log("Happy Birthday to you......");
};
singHappyBirthday();

// function sumThreeNumbers(num1, num2, num3) {
//   return num1 + num2 + num3;
// }

const sumThreeNumbers = function (num1, num2, num3) {
  return num1 + num2 + num3;
};
const ans = sumThreeNumbers(1, 2, 3);
console.log(ans);

// function isEven(number) {
//   return number % 2 === 0;
// }

const isEven = function (num) {
  return num % 2 === 0;
};

console.log(isEven(2));

const firstChar = function (anyString) {
  return anyString[0];
};

const findTarget = function (array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
};
