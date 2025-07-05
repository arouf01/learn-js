// Date: 05/07/2025

/*
Logical Operators: 
Logical And: &&
Logical OR: ||
Logical Not: !
*/

// 1. Logical And (&&): All the conditions must be true
/*
Syntex
if(condition1 && condition2 && condition3){
 Codes...
}
*/
let mathMark = 80;
let scienceMark = 79;
if (mathMark >= 33 && scienceMark > 33) {
  console.log("Passed");
} else {
  console.log("Failed");
}

// 2. Logical OR (||): One Of the conditions must be true
/*
Syntex
if(condition1 || condition2 || condition3){
 Codes...
}
*/
let banglaMark = 90;
let englishMark = 30;
if (banglaMark >= 33 || englishMark > 33) {
  console.log("Passed");
} else {
  console.log("Failed");
}

// 2. Logical Not (!): It is typically used with boolean (logical) values. When used with non-Boolean values, it returns false if its single operand can be converted to true ; otherwise, returns true .
/*
Syntex
if(condition1 || condition2 || condition3){
 Codes...
}
*/

let isLoggedIn = false;
console.log(!isLoggedIn); // true
console.log(!0); // true
console.log(!1); // false
console.log(!100); // false
