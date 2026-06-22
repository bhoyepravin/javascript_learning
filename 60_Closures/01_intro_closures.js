// closures 

// function can return function


// function outerFunction() {
//     function innerFunction() {
//         console.log("I am inside inner function");
//     }
//     return innerFunction;
// }

// const ans = outerFunction();
// // console.log(ans);
// ans(); // this is closure

// closure is a function that has access to the parent scope, even after the parent function has closed.




function printFullName(firstName, lastName) {
    function printName() {
        console.log(`I am ${firstName} ${lastName}`);
    }
    return printName;
}

const ans = printFullName("John", "Doe");
// console.log(ans);
ans(); // this is closure