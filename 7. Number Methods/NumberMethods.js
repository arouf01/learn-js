// Date: 03/07/2025

// toString(), toFixed(), parseInt(), parseFloat(), toExponential()

// 1. toString()
// The toString() method returns a number as a string.
let num1 = 123;
let convertStr = num1.toString();
console.log(convertStr, typeof convertStr);

// 2. toFixed()
// toFixed() returns a string, with the number written with a specified number of decimals:
let x = 9.6561747;
console.log(x.toFixed(2));

// 3. parseInt()
// parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:

console.log(parseInt("-10")); // -10
console.log(parseInt("-10.33")); // -10
console.log(parseInt("10")); // 10
console.log(parseInt("10.33")); // 10
console.log(parseInt("10 20 30")); // 10
console.log(parseInt("10 years")); // 10
console.log(parseInt("years 10")); // NaN = Not a Number

// Also can Convert Binary to Decimal
/*
Binary => base (2)
Decimal => base (10)
*/
let binaryNumber = 1010;
console.log("Decimal Number is ", parseInt(binaryNumber, 2)); // 56356

// Hexadecimal to Decimal
/**
 * Hexadecimal => base (16)
 */
let HexadecimalNumber = "AF27";
console.log("Hexadecimal Number is ", parseInt(HexadecimalNumber, 16)); // 44839

// 4. parseFloat()
// parseFloat() parses a string and returns a number. Spaces are allowed. Only the first number is returned:

console.log(parseFloat("10")); // 10
console.log(parseFloat("10.33")); // 10.33
console.log(parseFloat("10 20 30")); // 10
console.log(parseFloat("10 years")); // 10
console.log(parseFloat("years 10")); // NaN

// 5. toExponential()
// toExponential() returns a string, with a number rounded and written using exponential notation.

let y = 9.656;

console.log(y.toExponential(2));
console.log(y.toExponential(4));
console.log(y.toExponential(6));

// Note: Read W3School Number Methods to learn more...
