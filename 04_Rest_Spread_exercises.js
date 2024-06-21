// *****************************************************
// 1. Given this function:

// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
// }

// Refactor it to use the rest operator & an arrow function:
/* Write an ES2015 Version */
const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0);

// **********************************************************************
// 2. finMin
// Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.
// Make sure to do this using the rest and spread operator.
const findMin = (...nums) => nums.reduce((min, curVal) => curVal < min ? curVal : min);

// **********************************************************************
// 3. mergeObjects
// Write a function called mergeObjects that accepts two objects 
// and returns a new object which contains all the keys and values of the first object and second object.
const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

// **********************************************************************
// 4. doubleAndReturnArgs
// Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. 
// The function should return a new array with the original array values and all of additional arguments doubled.
const doubleAndReturnArgs = (arr, ...nums) => [...arr, ...nums.map(num => num * 2)];

// **********************************************************************
// 5. Slice and Dice!
// For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!
// Make sure that you are always returning a new array or object and not modifying the existing inputs.

/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {
    randomIdx = Math.round(Math.random() * (items.length-1));
    return items.filter((val, idx) => idx !== randomIdx);
}

const removeRandom2 = (items) => {
    randomIdx = Math.round(Math.random() * (items.length-1));
    return items.filter((val, idx) => idx !== randomIdx);
};

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
    return [...array1, ...array2];
}

const extend2 = (arr1, arr2) => [...arr1, ...arr2];

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
    const obj2 = {...obj};
    obj2[key] = val;
    return obj2;
}

const addKeyVal2 = (obj, key, val) => {
    const obj2 = {...obj};
    obj2[key] = val;
    return obj2;
};

/** Return a new object with a key removed. */

function removeKey(obj, key) {
    const obj2 = {...obj};
    delete obj2[key];
    return obj2;
}

const removeKey2 = (obj, key) => {
    const obj2 = {...obj};
    delete obj2[key];
    return obj2;
};


/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
    return {...obj1, ...obj2};
}

const combine2 = (obj1, obj2) => ({...obj1, ...obj2});


/** Return a new object with a modified key and value. */

function update(obj, key, val) {
    const obj2 = {...obj};
    obj2[key] = val;
    return obj2;
}

const update2 = (obj, key, val) => {
    const obj2 = {...obj};
    obj2[key] = val;
    return obj2;
};
