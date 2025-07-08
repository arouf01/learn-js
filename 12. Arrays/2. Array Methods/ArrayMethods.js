// Date: 08/07/2025

/*

Array Methods

*/

// 1. push(): কাজ: ‍Array-র শেষে নতুন মান যোগ করে| রিটার্ন করে: নতুন length
let fruits = ["Apple", "Banana"];
fruits.push("Mango");

console.log(fruits); // ["Apple", "Banana", "Mango"]

// 2. pop(): কাজ: Array-র শেষের উপাদান মুছে ফেলে| রিটার্ন করে: মুছে ফেলা মান
let items = ["Pen", "Pencil", "Eraser"];
let last = items.pop();

console.log(items); // ["Pen", "Pencil"]
console.log(last); // "Eraser"

// 3. shift(): কাজ: ‍Array-র শুরুর মান মুছে ফেলে| রিটার্ন করে: প্রথম মান
let names = ["Abdur", "Rony", "Jamal"];
let first = names.shift();

console.log(names); // ["Rony", "Jamal"]
console.log(first); // "Abdur"

// 4. unshift(): কাজ: ‍Array-র শুরুর দিকে মান যোগ করে| রিটার্ন করে: নতুন length
let numbers = [10, 20];
let checkReturn = numbers.unshift(5);

console.log(numbers); // [5, 10, 20]
console.log(checkReturn); // 3 : Return current array length

// 5. map(): কাজ: ‍প্রতিটি item-এর উপর কাজ করে নতুন Array তৈরি করে| রিটার্ন করে: নতুন অ্যারে
let nums = [1, 2, 3];

// If Single Line Return
let checkMap1 = nums.map((nu) => nu * 2);
console.log(checkMap1);

// Multiple Line: Use Return. Can use Index also
let checkMap = nums.map((nu, index) => {
  //   console.log("index", index);
  return nu * 2;
});
console.log(checkMap);

// 6. filter(): কাজ: শর্ত অনুযায়ী মান ছেঁকে নেয়| রিটার্ন করে: নতুন অ্যারে (শুধু যেগুলো শর্ত পূরণ করে)
let filterArray = [
  65, 89, 67, 25, 68, 7, 26, 56, 7, 6, 26, 7, 8, 92, 433, 69, 7, 2, 6, 88,
];

// Single Line
let newArray = filterArray.filter((fNum) => fNum >= 33);
console.log("Filter", newArray); // [ 65,  89, 67, 68, 56, 92, 433, 69, 88 ]

// Multiline reteun. Can use Index also
let newArray1 = filterArray.filter((fNum, index) => {
  //   console.log("index no ", index);
  return fNum >= 33;
});
console.log(newArray1); // [ 65,  89, 67, 68, 56, 92, 433, 69, 88 ]

// Another Example
let AllStudents = ["hamim", "lei", "habib", "kajon", "hasib"];

const getNameConatinsH = AllStudents.filter((nameH, index) => {
  //   console.log("index", index);
  return nameH.startsWith("h");
});
console.log(getNameConatinsH);

// 7. find(): কাজ: শর্ত অনুযায়ী প্রথম মান খুঁজে দেয়| রিটার্ন করে: প্রথম match পাওয়া item
let studentList = ["Abdullah", "jahid", "kalam", "salam", "Arif", "Alif"];
let getFirstNameWithA = studentList.find((nameA, index) => {
  // console.log("index", index);
  return nameA.startsWith("A");
});
console.log(getFirstNameWithA); // Abdullah

// 8. includes(): কাজ: ‍কোনো মান array-তে আছে কিনা চেক করে| রিটার্ন করে: true / false
let breakFast = ["Apple", "Mango"];
let checkBreakFast = breakFast.includes("Apple");
console.log(checkBreakFast); // true
console.log(breakFast.includes("Banana")); // false
