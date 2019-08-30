// Instructions - These snippets can be copied and pasted into the node repl.
// Predict what will be returned before hitting `enter`


const string = 'This is a string';
const num = 3;
const numStr = '3';

//This is a comment.  The computer will ignore this line.

console.log(string);                // returns: This is a string

console.log(string.length > 4);     // returns: true

console.log(string.length >= 6);    // returns: true

console.log(num < (3 + 1));         // returns: true

console.log(num <= 4);              // returns: true

console.log(num == numStr);         // returns: true

console.log(num != numStr);         // returns: false

console.log(num === numStr);        // returns: false

console.log(num !== numStr);        // returns: true

const lowStr = 'hello';
const upStr = 'HELLO';

lowStr == upStr;                    // returns: false
lowStr === upStr;                   // returns: false


// && (logical and), both conditions must evaluate to true for the expression to return true
const num6 = 6;
console.log((string.length == num6) && (num6 > 3));             // returns: false  Note: string.length = 16

console.log((string.length == num6) && (string.length != 6));   // returns: false   Note: string.length = 16

console.log(1 === 1 && 4 > 6);                                  // returns: false


// || (logical or), at least one condition must evaluate to true to return true
console.log((string.length > 7) || (num6 >= 8));                // returns: true

console.log((string.length < 6) || (num6 >= 2));                // returns: true

console.log(3 !== '3' || 3 === 'three');                        // returns: true    Note: 3 != '3' is false BUT 3 !== '3' is true


// ! (logical not), takes a single Boolean value and inverts it
console.log(!(4 > 9));                                          // returns: true

console.log(!(string.length == num6));                          // returns: true

console.log((1 < 2) && (3 + 4 >= 7) || false);                  // returns: true

console.log((1 < 2) && (3 + 4 > 7) || true);                    // returns: true


// Your turn!
// 1. Declare and assign 6 variables: 2 that are strings, 2 that are numbers, 2 that are booleans.
const str1 = 'String';
const str2 = 'STRING';
const str3 = '3';

const num1 = 17;
const num2 = 150;
const num3 = 3;

const bool1 = true;
const bool2 = false;

// Use the variables you declared to write expressions.  Predict what the expression will evaluate to before you try it.
// Ex: const string1 = 'STRING'  const string2 = 'string'  console.log(string1 === string2);  Prediction: false

console.log(str1 === str2);     // returns: false
console.log(num1 == num2);      // returns: false
console.log(num1 <= num2);      // returns: true

console.log(bool1 && bool2);    // returns: false
console.log(bool1 || bool2);    // returns: true
console.log(bool2 && bool2);    // returns: false
console.log(bool2 || bool2);    // returns: flase

console.log(str3 == num3);      // returns: true
console.log(str3 === num3);     // returns: false

console.log(num1 == num1 && str3 === num3);     // returns: false
console.log(num1 == num1 && str3 == num3);      // returns: true

console.log(num3== str3 || num1 == num2);       // returns: true

