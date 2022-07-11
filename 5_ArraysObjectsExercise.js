// Week 3 - Arrays and Objects

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Make an empty array named animals
let animals = [];

// Exercise 2. Add the string "frog" to the array
animals.push("frog");
console.log(`2. ${animals}`);

// Exercise 3. Add 4 more animals of your choice to the array. Try to add all of them in one line of code.
animals.push("giraffe", "tiger", "bear");
console.log(`3. ${animals}`);

// Exercise 4. Update the first item in the array to be "gorilla"
animals[0] = "gorilla"
console.log(`4. ${animals}`);

// Exercise 5. Print the number of items in the array (use the array property that will give you this information)
console.log(`5. animals length: ${animals.length}`);

// Exercise 6. Print the first item in the array
console.log(`6. first item in animals: ${animals[0]}`);

// Exercise 7. Print the last item in the array (as part of your answer, use the same array property you used in exercise 5 above)
console.log(`7. last item in animals: ${animals[animals.length-1]}`);

// Exercise 8. Remove the last item from the array
animals.pop();
console.log(`8. animals with last item removed: ${animals}`);

// Exercise 9. Now make a new array named assortedThings that contains at least 3 strings and 3 numbers.
let assortedThings = ['a', 'b', 'c', 1, 2, 3];
console.log(`9. assortedThings: ${assortedThings}`);

// Exercise 10. Write a for loop that iterates through the assortedThings array and prints each index and item, such as:
// Item #0 is potato
// Item #1 is 4
// Item #2 is Hello World
// ...
console.log(`10.`);
for (let i=0; i < assortedThings.length; i++) {
    console.log(`Item #${i} is ${assortedThings[i]}`);
}

// Exercise 11. Write a function that takes an array of numbers as a parameter. For each number in the array,
// print the number and "BIG" if it's over 100, "small" if it's between 0 and 100, and "negative" if
// it's less than 0. Example:
// if the array is [-2, 200, 50], print:
// -2 negative
// 200 BIG
// 50 small
//
// Then write some function calls you would use to test your function.
function numSize(arr) {
    for (let i=0; i<arr.length; i++) {
        if (arr[i] > 100) {
            console.log("BIG");
        } else if (arr[i] <=100 && arr[i] >= 0) {
            console.log("small");
        } else if (arr[i] <0 ) {
            console.log("negative");
        } 
    }
}
// or 

function numSize1(arr) {
    for (let num of arr) {
        if (num > 100) {
            console.log("BIG");
        } else if (num <=100 && num >=0) {
            console.log("small");
        } else {
            console.log("negative");
        }
    }
}
console.log(`11.`);
console.log(numSize([-2, 200, 50])); // negative, BIG, small


// Exercise 12. Make an object called me that contains the following keys: name, favoriteAnimal, favoriteNumber
// The values of those keys can be whatever you choose.
let me = {
    name: 'Meia',
    favoriteAnimal: 'white tiger',
    favoriteNumber: '3'
};

function showMe (obj) {
    for (let k in obj) {
        console.log(`${k}: ${obj[k]}`);
    }
}
console.log(`12.`);
showMe(me);

// Exercise 13. Add another 2 keys and values to the object (you choose what they are)
me.favoriteColor = 'yellow';
me['favoriteApp'] = 'Flora';
console.log(`13.`);
showMe(me);

// Exercise 14. Update the favoriteAnimal value to something different
me['favoriteAnimal'] = 'giraffe';
console.log(`14. / 15.`);
showMe(me);

// Exercise 15. Print the value of favoriteAnimal.
// Note: there are at least 2 ways to get the value of a key, try to write both.
console.log(`15. \n 
With dot notation: ${me.favoriteAnimal} \n
With brackets: ${me['favoriteAnimal']}`);

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
// Moderately easy!

// Email your file to the course staff,
// or commit your file to GitHub and email us a link.
