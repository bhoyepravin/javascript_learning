// function returning function

function myFunc() {
  function hello() {
    return "Hello world";
  }
  return hello;
}

const ans = myFunc();
console.log(ans());
