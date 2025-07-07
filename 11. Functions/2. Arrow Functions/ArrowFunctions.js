// Date: 07/07/2025

/* 
Arrow function is the same function we have used before. Just structure is different
Structure:

1. Function Name
2. use: = 
3. use: ()
4. use: =>
5. use: {}

const greetUser = () => {
codes.......
}

Let's see some example
*/

// without parameters
const greetUser = () => {
  console.log("Hello");
};
// call
greetUser();

// with parameters
const greet = (name) => {
  console.log(`hi, ${name}`);
};
greet("Abdur Rouf");
