// function execution context

let foo = "foo";    // let value is uninitialized
console.log(foo);
function getFullName(firstName, lastName){
    console.log(arguments);
    let myVar = "var inside func";
    console.log(myVar);
    const fullName = firstName + " " + lastName;
    return fullName;
}

const personName = getFullName("pravin", "bhoye");    // uninitialialized
console.log(personName);

// in javascript - now i want to call getFullName function - in js when we call function create new execution context that is call Function Execution Context.