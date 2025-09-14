// Callback function

function myFunct(name) {
  console.log("inside my function");
  console.log(`your name is ${name}`);
}

function myFunc(Callback) {
  console.log("hello pravin these is callback funtion");
  Callback("pravin");
}

myFunc(myFunct);
