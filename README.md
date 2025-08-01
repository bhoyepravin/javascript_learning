# javascript_learning

# JavaScript Basics Overview

## 01_History_of.js

- Created by Brendan Eich in 1995 in just 10 days
- Originally named Mocha, then LiveScript, before becoming JavaScript
- Standardized as ECMAScript in 1997

## 02_How_to_execute.js

- Can be executed:
  - In browser console
  - Using Node.js runtime
  - Embedded in HTML via `<script>` tags
  - Through REPL environments

## 03_Hello_World_program

console.log("Hello, World!");

## 04_intro_to_variables

Containers for storing data values

## Three ways to declare:

var (older, function-scoped)
let (block-scoped, can be reassigned)
const (block-scoped, cannot be reassigned)

## 05_Rules_for_naming_variables

Must begin with letter, $, or
Case sensitive
Cannot use reserved keywords
Use camelCase convention
Should be descriptive

## 06_Let_keyword

let count = 0;
count = 1; // Valid
let count = 2; // Error: redeclaration not allowed
07_Const_Keyword

const PI = 3.14;
PI = 3.14159; // Error: assignment to constant
08_String_Indexing

let lang = "JavaScript";
console.log(lang[0]); // "J"
console.log(lang[4]); // "S"
console.log(lang.length); // 10
