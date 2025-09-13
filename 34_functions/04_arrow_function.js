// Arrow Functions

// const singHappyBirthday = function () {
//   console.log("Happy Birthday to you.....");
// };

// singHappyBirthday();

// Arrow Function

const singHappyBirthday = () => {
  console.log("happy birthday to you....");
};

singHappyBirthday();

const sumThreeNumbers = (num1, num2, num3) => {
  return num1 + num2 + num3;
};

const ans = sumThreeNumbers(3, 4, 5);
console.log(ans);

const isEven = (number) => number % 2 === 0;

console.log(isEven(4));
