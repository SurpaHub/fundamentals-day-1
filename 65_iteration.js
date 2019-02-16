// Logs the value of each item in an array
const logArray = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
};
logArray([25, 101, 66, 10, 99]);


// Write a function which *returns* the maximum value of an array.
const max = (array) => {

};
const result1 = max([25, 101, 66, 10, 99]);
console.log(result1 + ' should be 101');


// Write a function to return the minimum value of an array.
const min = (array) => {

};
const result2 = min([25, 101, 66, 10, 99]);
console.log(result2 + ' should be 10');


// Write a function which detects if a given value is in the array.
const inArray = (array, number) => {

};
const resultT = inArray([25, 101, 66, 10, 99], 66);
const resultF = inArray([25, 101, 66, 10, 99], 77);
console.log(resultT + ' should be true');
console.log(resultF + ' should be false');


// Write a function that builds an array where each item in the array is equal to its own index number.
const identityArray = (size) => {

};
const result3 = identityArray(10);
console.log(result3 + ' should be [0,1,2,3,4,5,6,7,8,9]');


// Write a function that makes an array of range of numbers, inclusive.
const range = (begin, end) => {

};
const result4 = range(20, 25);
console.log(result4 + ' should be [20,21,22,23,24,25]');


// Write a function that builds an array where values are double the index if odd or quadruple if even.
const doubleOrQuadruple = (size) => {

};
const result5 = doubleOrQuadruple(10);
console.log(result5 + 'should be [ 0, 2, 8, 6, 16, 10, 24, 14, 32, 18 ]');

// Declare a variable and assign it to an empty array.

// Add the names of three cities you would like to visit to your array.

// Write a function that will loop over your array and print, 'I would like to visit (city name)'.

// Write a function that will loop over your array and print 'long' if the city's name has more
// than 6 letters, or 'short' if the city's name 6 or fewer letters.
