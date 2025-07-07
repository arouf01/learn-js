// Date: 07/07/2025

/*
Function Structure

1. declare 'fucntion' word
2. give function name and ()
3. use {}. Under {} all your codes
4. call the function

example:
function greet(){
code....
}
*/

// Without parameters
function greet() {
  console.log("Hello");
}
// call function
greet();

// with Parameters
function greetUser(name) {
  // here name is dynamic. its called parameter
  console.log(`Hello ${name}, how are you ?`);
}
// call function
greetUser("Abdur Rouf"); // after function calling, use parameter value. its call argument
greetUser("Abdullah"); // function can be called multiple times with multiple value

// More examples

function sum(num1, num2) {
  let total = num1 + num2;
  console.log(total);
}
sum(1, 2);
sum(3, 4);
sum(5, 6);
