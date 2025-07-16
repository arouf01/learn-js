// Date: 16/07/2025

/**
 * for(     ;       ;       ){
 *
 * }
 *
 *
 * for(1st statement; 2nd statement; 3rd statement){
 * loop statement
 * }
 *
 *
 * for (loop varibale; loop condition; varibale change){
 * loop statement
 * }
 *
 */

for (let num = 5; num < 5; num++) {
  console.log(num);
}

// Odd Numbers
for (let num = 1; num <= 20; num += 2) {
  console.log(num);
}
// Even Numbers
for (let num = 0; num <= 20; num += 2) {
  console.log(num);
}

// Sum using loop
let sum = 0;
for (i = 0; i <= 20; i++) {
  // console.log(i);
  sum += i;
}
console.log(sum);

// decrement for loop
for (let i = 20; i >= 0; i--) {
  console.log(i);
}

/*
Tasks
1. "I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.
2. Find all the odd numbers from 61 to 100.
3. Find all the even numbers from 78 to 98.
4. Display sum of all the odd numbers from 91 to 129.
5. Display sum of all the even numbers from 51 to 85.
6. Generate a multiplication table for number 9
7. Implement a countdown timer that counts down from 81 to 65.

*/

// Task 1
for (let i = 1; i <= 60; i++) {
  console.log(
    i,
    "I will invest at least 6 hrs every single day for next 60 days!"
  );
}

// Task 2
for (let i = 61; i <= 100; i += 2) {
  console.log(i);
}

// Task 3
for (let i = 78; i <= 98; i += 2) {
  console.log(i);
}

// Task 4
let oddSum = 0;
for (let i = 91; i <= 129; i += 2) {
  // console.log(i);
  oddSum += i;
}
console.log(oddSum);

// Task 5
let evenSum = 0;
for (let i = 51; i <= 85; i++) {
  if (i % 2 === 0) {
    evenSum += i;
    // console.log(i);
  }
}
console.log(evenSum);

// Task 5: 2nd way
let evenSum2 = 0;
for (let i = 52; i <= 85; i += 2) {
  evenSum2 += i;
  // console.log(i);
}
console.log(evenSum2);

// Task 6
for (let i = 1; i <= 10; i++) {
  console.log(i * 9);
}

// Task 7 81 to 65
for (let i = 85; i >= 65; i--) {
  console.log(i);
}
