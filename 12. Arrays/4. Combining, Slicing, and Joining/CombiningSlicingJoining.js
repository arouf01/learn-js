// Date: 09/07/2025
/*
1. Comibone: concat()
2. Slice: slice()
3. Join: join()
*/

// 1. Comibone: concat() : কাজ: একাধিক array একত্রে মেশানো
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combineArray = arr1.concat(arr2);
console.log(combineArray); // [ 1, 2, 3, 4, 5, 6 ]
let combineArray2 = arr2.concat(arr1);
console.log(combineArray2); // [ 4, 5, 6, 1, 2, 3 ]

// 2. Slice: slice(start, end) : ‍array-র নির্দিষ্ট অংশ কেটে নতুন array তৈরি করে। মূল array পরিবর্তিত হয় না।
let arr3 = [1, 2, 3, 4, 5, 6];
let sliceArray = arr3.slice(2, 4); // index 2 theke 4 porjonto
console.log(sliceArray); // [ 3, 4 ]

// 3. Join: join(separator) : array-এর সব item কে একটা string বানিয়ে ফেলে, মাঝখানে separator দিয়ে আলাদা করে।
let tags = ["HTML", "CSS", "JavaScript"];

let display = tags.join(", ");
console.log(display); // HTML, CSS, JavaScript
let display2 = tags.join(" ");
console.log(display2); // HTML CSS JavaScript
let display3 = tags.join(" - ");
console.log(display3); // HTML - CSS - JavaScript
