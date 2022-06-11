// Week 1 - Variables

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Data Types and Variables

// Exercise 1. Simply declare a variable named 'emptyVariable'
var emptyVariable;

// Exercise 2. Declare a variable called 'myName'
var myName;

// Exercise 3. Assign your name as the value for 'myName'
myName = "Meia";

// Exercise 4. Declare a variable called dreamDestination and give it the value
// of what your dream vacation destination is.
var dreamDestination = "New Zealand";

// Exercise 5. Make the following variables and assignments
// - a variable called num1 with a value greater than 1 and less than 10
// - a variable called num2 with a value of greater than or equal to 1 and less
// than or equal to 10
var num1 = 5;
var num2 = 7;

// Exercise 6. Write a comment below explaining the difference between the rules
// for num1 and num2 from Exercise 5. What numbers would be valid values for
// num2 but not num1?
// The difference between num1 and num2 is that num1 must be greater than 1 and less than 10, meaning num1 cannot equal 1 or 10, whereas num2 can equal 1 or 10.

// Exercise 7. Now we will try some addition.
// a. Assign the the values of 4 and 6 to num1 and num2, respectively.
// b. Make a new variable called 'theSum', and use 'num1' and
// 'num2' to assign its value using the "+" operator.
num1 = 4;
num2 = 6;
var theSum = num1 + num2;
console.log("theSum should be 10: " + theSum);

// Exercise 8. Now we will try some multiplication.
// Make a new variable called 'theProduct', multiply num1 and num2 and assign
// the resulting value to 'theProduct'.
var theProduct = num1 * num2;
console.log("theProduct should be 24: " + theProduct);

// Exercise 9.
// Make a new variable called 'statement' and using 'myName' and
// 'dreamDestination' and the concatenation method of your choice, make the
// value of statement to be:
// "Hi, my name is <your name>, and I can't wait to visit <your destination>!"
var statement = "Hi, my name is " + myName + ", and I can't wait to visit " + dreamDestination + "!";
console.log("The following should read \"Hi, my name is Meia, and I can\'t wait to visit New Zealand!\"" + statement);

// *NOTE* For the following exercises, put your answers in the line below
// the description of each exercise. For example, below a prompt, you may see:
// let myAnswerForExercise10= "";
// If your answer is "foo", then fill in the line to be:
// let myAnswerForExercise10 = "foo";

// Exercise 10. What is the data type of the value stored in 'dreamDestination',
// place your answer in the quotes below:

const myAnswerForExercise10 = "string";

// Exercise 11. What is the data type of the value stored in 'product',
// place your answer in the quotes below:

const myAnswerForExercise11 = "number";

// Exercise 12. What do you think the value of emptyVariable is?
// Place your answer below:

const myAnswerForExercise12 = "undefined";

// Exercise 13. If
const A = "R";
const B = 1;
const C = 4;
const D = "D";

// What is the value of B + C
const myAnswerForExercise13 = "5";
console.log(myAnswerForExercise13 + " should be: " + (B + C));

// Exercise 14 What is the value of
// A + "n" + D
const myAnswerForExercise14 = "RnD";
console.log(myAnswerForExercise14 + " should be: " + (A + "n" + D));

// Exercise 15 What is the value of
// A + B * 2 + D + C / 2:
const myAnswerForExercise15 = "R2D2";
console.log(myAnswerForExercise15 + " should be: " + (A + B * 2 + D + C / 2));

// Exercise 16 What is the value of A * B
const myAnswerForExercise16 = "NaN";
console.log(myAnswerForExercise16 + " should be: " + (A * B));

// Exercise 17 What is the value of true || false
const myAnswerForExercise17 = "true";
console.log(myAnswerForExercise17 + " should be: " + (true || false));

// Exercise 18 What is the value of 1 === "1"
const myAnswerForExercise18 = "false";
console.log(myAnswerForExercise18 + " should be: " + (1 === "1"));

// Exercise 19 What is the value of 1 == "1"
const myAnswerForExercise19 = "true";
console.log(myAnswerForExercise19 + " should be: " + (1 == "1"));

// Exercise 20 What is the value of 1 < 1
const myAnswerForExercise20 = "false";
console.log(myAnswerForExercise20 + " should be: " + (1 < 1));

// Exercise 21 What is the value of 1 < 2 < 3
const myAnswerForExercise21 = "true";
console.log(myAnswerForExercise21 + " should be: " + (1 < 2 < 3));
// Exercise 22 What is the value of 2 < 1 < 3
const myAnswerForExercise22 = "true";
console.log(myAnswerForExercise22 + " should be: " + (2 < 1 < 3));
// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
// For Exercise 22, I could not understand why this 2 < 1 < 3. This referenced helped me understand that 1's and 0's can be converted to booleans: https://stackoverflow.com/questions/51648057/why-does-3-2-1-return-false-while-1-2-3-returns-true

// Email your file to the course staff,
// or commit your file to GitHub and email us a link.
