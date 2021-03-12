/* 
Read the following functions. For each one, figure out:
- What does the function do? 
- Try to figure out the runtime -- O(1), O(log n), O(n), O(n log n), O(n^2), or O(2^n)
- Run the function with a few different input sizes and see how long it takes
- When the input size doubles, what happens to the time it takes to run?
*/

const mysteryFunction0 = function (array) {
  const myFavoriteNum = 7;
  for (i = 0; i < array.length; i++) {
    if (array[i] === myFavoriteNum) {
      return true;
    }
  }
  return false;
};

//What it does:
/* What I think it does: This function takes in an array and checks to see if each element is 7. The functin will return a new list of true/false booleans.

What it actually does: 
*/
// Runtime: 
/* 
My answer: O(n)

The actual answer: 
*/

const mysteryFunction1 = function (array) {
  index = 4;
  return array[index];
};

//What it does:
/* What I think it does: Assigns a function to a variable. The function takes an an array and returns the element of the array[4].

What it actually does: 
*/
// Runtime: Returns
/* 
My answer: O(1)

The actual answer: 
*/

const mysteryFunction2 = function (n) {
  const primes = [];
  for (i = 2; i < n; i++) {
    let factorFound = false;
    for (j = 2; j < n; j++) {
      if (i % j === 0 && i !== j) {
        factorFound = true;
      }
    }
    if (!factorFound) {
      primes.push(i);
    }
  }
  return primes.length;
};

//What it does:
/* What I think it does: 
A variable is assigned to the function that takes in arg "n". In that function, a new array is made "primes. For as many times from 2 to n, if the number the console is looping over === 0, and not the number it's counting (j), it will return "true", starting at the #2--this will be completed for as many times from 2 to n. Otherwise, the number will be pushed to the primes array.  In the function will return the length of primes.

I think in the end it'll return 0 since I believe primes will be empty.

What it actually does: 
*/
// Runtime: Returns
/* 
My answer: 
O(n^2)

The actual answer: 
*/

const mysteryFunction3 = function (array) {
  myLength = array.length;
  if (myLength % 2 == 0) {
    return "even length";
  } else {
    return "odd length";
  }
};

//What it does:
/* What I think it does: 

What it actually does: 
*/
// Runtime: Returns
/* 
My answer: 

The actual answer: 
*/

const mysteryFunction4 = function (string) {
  let eCount = 0;
  for (i = 0; i < string.length; i++) {
    if (string[i] === "e") {
      eCount++;
    }
  }
  return eCount;
};

//What it does:
/* 


What it actually does: 
*/

// Runtime: 
/* 
My answer: 

The actual answer: 
*/

const mysteryFunction5 = function (array) {
  array.sort();
};

//What it does:
/* What I think it does: 

What it actually does: 
*/
// Runtime: Returns
/* 
My answer: 

The actual answer: 
*/

const mysteryFunction6 = function (dict, key) {
  const value = dict[key];
  return value;
};

//What it does:
/* What I think it does: 

What it actually does: 
*/
// Runtime: Returns
/*
My answer: 

The actual answer:  
*/

const mysteryFunction7 = function (array) {
  // Assume `array` is an array of ints sorted from smallest to biggest
  const lookingFor = 9;
  let lowerBound = 0;
  let upperBound = array.length - 1;
  let guessIndex = Math.floor(upperBound / 2);
  while (lowerBound <= upperBound) {
    if (array[guessIndex] === lookingFor) {
      return true;
    } else if (lookingFor < array[guessIndex]) {
      upperBound = guessIndex - 1;
    } else {
      lowerBound = guessIndex + 1;
    }
    guessIndex = Math.floor((lowerBound + upperBound) / 2);
  }
  return false;
};

//What it does:
/* What I think it does: 

What it actually does: 
*/
// Runtime: Returns
/* 
My answer: 

The actual answer: 
*/

const mysteryFunction8 = function (dictionary) {
  for (let key in dictionary) {
    let value = dictionary[key];
    if (key == value) {
      return true;
    }
    return false;
  }
};

//What it does:
/* What I think it does: 

What it actually does: 
*/
// Runtime: Returns
/* 
My answer: 

The actual answer: 
*/

// When the input size doubles, what happens to the time it takes to run?
