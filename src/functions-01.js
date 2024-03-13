/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
/*
 * functions-01.js
 * Language: javascript
 * Test: tests/functions-01.test.js
 * Path: src/functions-01.js
 *
 *
 */

/**
 * accepts a string of a person's first and last names and
 * returns a string with "lastname, firstname"
 * @param {string} str - the string with first and last names
 * @returns {string} - the string as last name, first name
 * example: "John Smith" returns "Smith, John"
 * example: 'Buzz Lightyear' returns 'Lightyear, Buzz'
 */
function nameShuffle(str) {
  // write your code here & return value
  const words = str.split(' ');
  const firstName = words[0];
  const lastName = words[1];
  console.log(firstName, lastName);
  const newStr = `${lastName}, ${firstName}`;
  console.log(newStr);
  return newStr;
}

nameShuffle('John Smith');

/**
 * returns true if a pair of strings is a "strange pair",
 * and false otherwise.
 * @param {string} str1 - the first string to compare
 * @param {string} str2 - the second string to compare
 * @returns {boolean}
 * A strange pair is when the first letter of one string is
 * the last letter of the other string
 *
 * example: 'ratio', 'orator' returns true
 * example: 'cupid', 'dionysus' returns false
 * example: 'yahtzee', 'easy' returns true
 * example: '&', '&' returns true
 */
function isStrangePair(str1, str2) {
  // write your code here & return value
  const str1First = str1[0];
  const str2First = str2[0];
  const str1Last = str1[str1.length - 1];
  const str2Last = str2[str2.length - 1];
  const bool = (str1First === str2Last) && (str2First === str1Last);
  return bool;
}

/**
 * Returns the number from a string with a % sign at the end
 * @param {string} percent - string with an ending % character
 * @returns {number} - the number of the percent
 * example: '10%' returns 0.1
 * example: '100%' returns 1
 * example: '98.6%' returns 0.986
 */
function convertToDecimal(percent) {
  // write your code here & return value
  const newStr = percent.slice(0, -1);
  return (Number(newStr) / 100);
}

convertToDecimal('98.6%');

/**
 * Returns true if two arrays sum up to the same number
 * @param {array} a1 - first array of numbers to compare
 * @param {array} a2 - second array of numbers to compare
 * @returns {boolean}
 * example: [1, 2, 3, 4], [4, 3, 2, 1] returns true
 * example: [0, 0, 0, 0, 0], [1, 1, 1, 1] returns false
 * example: [2,2] , [1, 1, 1, 1,] return true
 * example: [1, 2, 3, 4], [4, 3, 2, 1, 5] returns false
 */
function checkSameSum(a1, a2) {
  // write your code here & return value
  let total1 = 0;
  for (let index = 0; index < a1.length; index++) {
    total1 += a1[index];
  }
  let total2 = 0;
  for (let index = 0; index < a2.length; index++) {
    total2 += a2[index];
  }
  return total1 === total2;
}

/**
 * Saves the username for later use
 * @param {string} name - a username
 * @returns {function} - a function that returns the username
 * example: saveUsername('John') returns a function that returns 'John'
 * must use a closure to save the username
 */
function saveLogin(name) {
  // write your code here
  function logName() {
    return name;
  }
  return logName;
}

const loggedName = saveLogin('Fletcher');
console.log(loggedName());

module.exports = {
  nameShuffle,
  isStrangePair,
  convertToDecimal,
  checkSameSum,
  saveLogin,
};
