// Instructions - These snippets can be copied and pasted into the node repl.
// Predict what will be returned before hitting `enter`

// variables and types
const string = 'a string contains text in quote marks';
const number = 3;
const numberStr = '3';
const boolType = false;

string      // returns: 'a string contains text in quote marks' 
number      // returns: 3
numberStr   // returns: '3'
boolType    // returns: false

// variables & mutability
let x = 1;
x           // 1
x = 2;
x           // 2
x = 3;
x           // 3

// 1. Declare a variable called 'name' and assign it to a string of your name.  Use console.log to print it.
const name = 'John Smith';
console.log(name);

// 2. Declare a variable called 'year' and assign it to a number. Use console.log() to print it.
const year = 2020;
console.log(year);

// 3. Declare a variable called 'snack' and do not assign it a value.  Log it.
let snack;              // note: use let vs const.  const snack; gives you syntax error
console.log(snack);     // returns: undefined

// 4. Assign a string value to 'snack' and log it again.  What changed?
snack = 'Cheetos';
console.log(snack);     // returns: 'Cheetos'

// 5. Log the length of 'snack'.
console.log(snack.length);  // returns: 7