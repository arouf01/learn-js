// Date: 08/07/2025

/*
Array কী?
JavaScript-এ Array হলো একটি বিশেষ ভ্যারিয়েবল যা একাধিক মান (value) একসাথে রাখতে পারে।

 তুমি অনেকগুলো ডেটা একটা তালিকা (list) আকারে রাখতে পারো।
*/
/*
1. Array তৈরি করার নিয়ম
*/

// সরাসরি মান দিয়ে (Literal way)
let fruits = ["Apple", "Mango", "Banana"]; // এখানে fruits নামের array-তে ৩টা ফলের নাম রাখা হয়েছে।

console.log(fruits);

/*
Array Constructor দিয়ে
*/
let numbers = new Array(10, 20, 30); // এটা অন্য একটি উপায়, তবে সাধারণত প্রথমটার মতো লেখা বেশি ব্যবহার হয়।
console.log(numbers);

// 2. Array Access (তথ্য পড়া)

// index ব্যবহার করে (0-based)
let fruits1 = ["Apple", "Mango", "Banana"];

console.log(fruits1[0]); // Output: Apple
console.log(fruits1[1]); // Output: Mango
console.log(fruits1[2]); // Output: Banana
// মনে রাখো: index শুরু হয় 0 থেকে।
