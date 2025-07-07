// Date: 07/07/2025
/*
1. Function Expressions
2. Anonymous Functions
3. Callback Functions
*/

// 1. Function Expressions
/* ফাংশনকে যখন কোনো variable-এর মধ্যে assign করা হয়, তখন তাকে বলে Function Expression।
এখানে function() কোনো নাম ছাড়াই sayHello নামের ভ্যারিয়েবলে রাখা হয়েছে।
*/
const sayHello = function () {
  console.log("Hello!");
};

sayHello(); // Output: Hello!

// 2. Anonymous Functions
// যেসব ফাংশনের নিজস্ব কোনো নাম থাকে না, তাদের বলে Anonymous Function।
setTimeout(function () {
  console.log("Anonymous Function");
}, 1);

// Example with Arrow Function
setTimeout(() => {
  console.log("Arrow Anonymous Function");
}, 1);

// 3. Callback Functions
// যে function-কে আরেকটা function-এর argument হিসেবে পাঠানো হয়, এবং সেই outer function যাকে পরে কল করে, তাকে বলে Callback Function।

function greet(name, Callback) {
  console.log(name);
  Callback();
}

greet("Abdur Rouf", function () {
  console.log("I am callback");
});

// With Arrow + Callback
const friends = ["Abdur Rouf", "Shohag", "Naeem"];
friends.forEach((friend) => console.log(`Hello, ${friend}`));
