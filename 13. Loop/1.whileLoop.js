// Date: 16/07/2025

/**
 * let num = 0;  => Loop Variable
 * while(num < 5){ => Loop condition
 * console.log(num); => Loop Statement
 *
 * num++ => Loop Variable Change
 * }
 *
 */

let num = 0;
while (num < 5) {
  // console.log(num);
  num++;
}
/*
Tasks
1. I will invest at least 6 hrs every single day for next 60 days! this message 60 times. So display this.
2. Find all the odd numbers from 61 to 100.
3. Find all the even numbers from 78 to 98.
4. Display sum of all the odd numbers from 81 to 131.
5. Display sum of all the even numbers from 206 to 311.
6. As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5
7. Implement a countdown timer that counts down from 21 to 15.

*/

// Task 1
let count = 1;
while (count <= 60) {
  console.log(
    count,
    "I will invest at least 6 hrs every single day for next 60 days!"
  );
  count++;
}

// Task 2
let oddNum = 61;
while (oddNum <= 100) {
  console.log(oddNum);
  oddNum += 2;
}

// Task 3
let evenNum = 78;
while (evenNum <= 98) {
  console.log(evenNum);
  evenNum += 2;
}

// Task 4
let oddSum = 0;
let oddStart = 81;
while (oddStart <= 131) {
  // console.log(oddStart);

  oddSum += oddStart;
  oddStart += 2;
}
console.log(oddSum);

// Task 5
let evenSum = 0;
let evenStart = 206;
while (evenStart <= 311) {
  // console.log(evenStart);

  evenSum += evenStart;
  evenStart += 2;
}
console.log(evenSum);

// Task 6
let tableOfFive = 1;
while (tableOfFive <= 10) {
  console.log(tableOfFive * 5);
  tableOfFive++;
}

// Task 7
let countDownStart = 21;
while (countDownStart >= 15) {
  console.log(countDownStart);
  countDownStart--;
}
