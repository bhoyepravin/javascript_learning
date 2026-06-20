// compilation
// code execution

// why compilation

// How javascript code executes

// what is global execution context?
// what is local execution context ?

// closures
console.log(this);
console.log(window);
console.log(firstName);
var firstName = "pravin";
console.log(firstName);

// first compile 
// before execution compiler watch/look our code 

// 1st compile 
// compilation phase devide 3 parts  1st-Tokenizing/lexing, 2nd-Parsing , 3rd - code generation
// Tokenizing - Code devide into small parts , that small chunks we called Tokens.
// Parsing - Joint the small parts of code chunks create AST (Abstract Syntax Tree).  Create a executable code - we discuss about in detail after some time.
// But why we compile code ?
// Before code execution we know following things.
// 1. Early Error checking - Before code execution eg. syntax error check 
// 2. Determining appropriate scope for variables - Variable appropriate scope - Belong to which scope
// For these 2 work code parsing is must before execution.
// conclusion :- Hamare code me 1st line bhi execute hone se pahle code compile hota hai.
// code Generation :-

// What is Early Error Checking :- 
// why our code parse :- which variable belongs to which scope - These decide before code execute

// ********************************
//1 ) Compilation phase
//   - Early Error checking 
//   - Determining Appropriate scope for variables

// 2) Code Execution Phase in J.S Code Executes inside execution context
// code ko execute karne ke liye Execution Context create krna hoga.
// Global Execution Context -
// How work Global Execution Context -
// Global Execution Context 2 Parts -
// 1. Creation Phase  - 
// 2. Code Execution Phase - Means Before First line execute create global Execution context


// Javascript is synchronus programming - means code line by line execute hota hai.
// js is single threaded programming language - means ek time pe ek hi kaam kar sakta hai.




// 2nd Code execute