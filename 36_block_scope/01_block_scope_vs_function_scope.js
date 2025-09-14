// block scope vs function scope

// let and const are block scope

// {
//   let firstName = "Pravin";
//   console.log(firstName);
// }

// {
//   let firstName = "bhoye";
//   console.log(firstName);
// }

// const cityName = "Nashik";
// console.log(cityName);

// var is function scope

{
  var firstName = "Pravin";
  console.log(firstName);
}
{
  console.log(firstName);
}

// var access anywhere

// prefered to use let & const
function myApp() {
  if (true) {
    var firstName = "pravin";
    console.log(firstName);
  }

  if (true) {
    console.log(firstName);
  }
  console.log(firstName);
}

myApp();
