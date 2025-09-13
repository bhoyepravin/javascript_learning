// function inside function

const app = () => {
  const myfunc = () => {
    console.log("Hello from myFunc");
  };

  const addTwo = (num1, num2) => {
    return num1 + num2;
  };

  const mul = (num1, num2) => num1 * num2;

  console.log("Inside app");
  myfunc();
  console.log(addTwo(2, 3));
  console.log(mul(2, 3));
};
app();
