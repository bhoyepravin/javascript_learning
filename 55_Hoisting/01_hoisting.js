
// hoisting

// console.log(this);  
// console.log(window);
// console.log(myFunction);
// console.log(fullName);

// function myFunction(){
//     console.log("this is my function");
// }

// var firstName = "pravin";
// var lastName = "bhoye"
// var fullName = firstName + " " + lastName;
// console.log(fullName);

console.log(myFunction)

var myFunction = function(){
    console.log("this is my function");
}

// Var value store store undefined in memory but function store in memory with value because of hoisting

console.log(myFunction)
