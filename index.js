'use strict';

/**
 * Collection of number utility functions
 * https://github.com/akbeeram/num-utils
 * @copyright akbeeram
 * @license MIT
 */
/**
 * Function to check if a number is within range,
 * by default min and max range limits included
 * @param {Number} input 
 * @param {Number} min 
 * @param {Number} max 
 */
function isInRange(input, min, max) {
    return input <= max && input >= min;
}
function isInRangeEx(input, min, max) {
    return input < max && input > min;
}
function isInRangeMinInc(input, min, max) {
    return input < max && input >= min;
}
function isInRangeMaxInc(input, min, max) {
    return input <= max && input > min;
}
function calcAverage(inputArr) {
    if(Array.isArray(inputArr)) {
        var result = sumOfNumbers(inputArr);
        return result/inputArr.length;
    // } else {
    //     throw 'calcAverage input must be an array of numbers';
    }
}
function sumOfNumbers(input) {
    var result = 0;
    if(Array.isArray(input)) {
        input.forEach(function(item, idx) {
            result += item;
        });
    } else if(Number.isInteger(input)) {
        for(var i  = 0 ; i <= input ; i++) {
            result += i;
        }
    // } else {
    //     throw 'sumOfNumbers input must be either anarray of numbers or an integer'
    }
    return result;
}
function isPythagoreanTriplets(a, b, c) {
    var inputArr = [a, b, c];
    var max = Math.max(a, b, c);
    inputArr.splice(inputArr.indexOf(max), 1);
    var sum = 0;
    inputArr.forEach(function(item, idx) {
        sum += Math.pow(item, 2);
    });
    return Math.pow(max, 2) === sum;
}
function isEven(input) {
    return input%2 === 0;
}
function isOdd(input) {
    return input%2 === 1;
}
function isNegative(input) {
    return input < 0;
}
function isPositive(input) {
    return input >= 0;
}
//divisibility
function isDivisibleBy2(input) {
    return isEven(input);
}
function isDivisibleBy3(input) {
    return input%3 === 0;
}
function isDivisibleBy4(input) {
    return input%4 === 0;
}
function isDivisibleBy5(input) {
    return input%5 === 0;
}
function isDivisibleBy(input, num) {
    return input%num === 0;
}
module.exports = {
    isEven: isEven,
    isOdd: isOdd,
    isNegative: isNegative,
    isPositive: isPositive,
    isDivisibleBy2: isDivisibleBy2,
    isDivisibleBy3: isDivisibleBy3,
    isDivisibleBy4: isDivisibleBy4,
    isDivisibleBy5: isDivisibleBy5,
    isDivisibleBy: isDivisibleBy,
    isInRange: isInRange,
    isInRangeEx: isInRangeEx,
    isInRangeMinInc: isInRangeMinInc,
    isInRangeMaxInc: isInRangeMaxInc,
    calcAverage: calcAverage,
    sumOfNumbers: sumOfNumbers,
    isPythagoreanTriplets: isPythagoreanTriplets
}