// Date: 03/07/2025

// Math.round(x), Math.ceil(x), Math.floor(x), Math.trunc(x)=es6, Math.sign(), Math.random(), Math.max()

// 1. Math.round(x)
// returns the nearest integer:
console.log(Math.round(6.7)); // return 7
console.log(Math.round(6.4)); // return 6

// 2. Math.ceil(x)
// returns the value of x rounded up to its nearest integer:
console.log(Math.round(6.7)); // return 7
console.log(Math.round(6.4)); // return 7

// 3. Math.floor(x)
// Math.floor(x) returns the value of x rounded down to its nearest integer:
console.log(Math.round(6.7)); // return 6
console.log(Math.round(6.4)); // return 6

// 4. Math.trunc()
// Math.trunc(x) returns the integer part of x:
Math.trunc(4.9); // return 4

// 5. Math.sign()
/**
 Math.sign(x) returns if x is negative, null or positive.
 If x is positive it returns 1
 If x is negative it returns -1
 If x is zero, it returns 0
 */
console.log(Math.sign(-4));
console.log(Math.sign(0));
console.log(Math.sign(4));

// 6. Math.random()
// Math.random() returns a random number between 0 (inclusive), and 1 (exclusive):
console.log(Math.random());
console.log(Math.random() * 10); // 0-10
console.log(Math.floor(Math.random() * 1000) + 1);

// 7. Math.max()
// return the max number
console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9));
let arr = [12, 4, 75, 9, 29, 80, 8, 2, 85, 3];
console.log(Math.max(...arr)); //use spread operator (...)

//Note: Check all the Math Objects in W3School
