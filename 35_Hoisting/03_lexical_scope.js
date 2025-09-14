// lexical scope
// function myApp() {
//   const myVar = "value1";

//   function myFunct() {
//     const myVar = "value59";
//     console.log("inside myFunc", myVar);
//   }

//   console.log(myVar);
//   myFunct();
// }

// myApp();

// lexical scope
const myVar = "Value1";

function myApp() {
  //const myVar = "value1";

  function myFunct() {
    //const myVar = "value59";
    console.log("inside myFunc", myVar);
  }
  myFunct();

  console.log(myVar);
  myFunct();
}

myApp();
