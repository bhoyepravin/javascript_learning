// nested if else

// winning number 19

// 19 your guess is right
// 17 to low
// 20 to high

// nested if else means if else inside if else

let winNum = 19;
let userGuess = +prompt("Guess a number"); //prompt is a function that gets user input   // prompt take user input in string15
//console.log(typeof userGuess, userGuess);

// if (userGuess === winNum) {
//   console.log("Your guess is right");
// } else {
//   console.log("Try again");
// }

if (userGuess === winNum) {
  console.log("Your guess is right");
} else {
  if (userGuess < winNum) {
    console.log("Too low !!!");
  } else {
    console.log("Too high !!!");
  }
}
