/*
Task 1: Declare an array
1. Declare an array with 5 elements containing fruits
2. console log the 3rd index element
3. change the value of the 2nd index element to jambura
4. console log the final array

Task 2: Add or remove elements
1. Declare an array of 3 tourist destinations
2. Add a new tourist destination to your tourist array
3. Add two more to your array
4. Remove the last tourist destination you have added
5. display the final array as output

Task 3: Checking Array Membership with ‘includes’
Instructions:

1. Create an array of books containing different book.
2. Use the includes method to check if the array contains a javascript book.
3. Print a message to the console indicating whether the element is present in the array or not.

Task 4: Checking if it's an Array
Instructions:

1. Create different variables, each containing either an array or a non-array value.

2. Now use isArray to check if each variable is an array.

3. Print a message to the console indicating whether each variable is an array or not.

Task 5: Combining Arrays
Instructions:

1. Create two arrays of your choice.
2. Use the concat method to combine the two arrays into a new array.
3. Print both the original arrays and the combined array using console.log().

*/

// Task 1: Declare an array

// 1
const fruits = ["amm", "jam", "kola", "lichu", "apple"];
// 2
console.log(fruits[3]);
// 3
fruits[2] = "jambura";
// 4
console.log(fruits);

// Task 2: Add or remove elements

// 1
const touristSpot = ["Japan", "korea", "Nepal", "Ice Land", "Green Land"];
// 2
touristSpot.push("Bangladesh");
// 3
touristSpot.push("Bhutan", "Russia");
// 4
touristSpot.pop();
// 5
console.log(touristSpot);

// Task 3: Checking Array Membership with ‘includes’

// 1
const bookList = ["Bangla", "English", "Science"];
// 2
const ifJsbookinclude = bookList.includes("javascript");
// 3
if (bookList.includes("javascript")) {
  console.log("Javascript book is in the Book List");
} else {
  console.log("Javascript book is not in the Book List");
}

// Task 4: Checking if it's an Array

// 1
const arr1 = [];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const text = "a dkf mfjn on";
const nums = 123;
// 2
const isArray1 = Array.isArray(arr1);
const isArray2 = Array.isArray(arr2);
const isArray3 = Array.isArray(text);
const isArray4 = Array.isArray(nums);
// 3
console.log(isArray1, isArray2, isArray3, isArray4);

// Task 5: Combining Arrays

// 1
const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9];
// 2
let combineArray = array1.concat(array2);
// 3
console.log("Original Array", array1, array2);
console.log("Combine Array", combineArray);
