'use strict';

/**
 * Collection of number utility functions
 * https://github.com/akbeeram/num-utils
 * @copyright akbeeram
 * @license MIT
 */
 
var basicMath = require('./src/basic-maths');
var divisibility = require('./src/divisibility');
var range = require('./src/range');
var misc = require('./src/misc');

module.exports = {
    isEven: basicMath.isEven,
    isOdd: basicMath.isOdd,
    isNegative: basicMath.isNegative,
    isPositive: basicMath.isPositive,
    calcAverage: basicMath.calcAverage,
    sumOfNumbers: basicMath.sumOfNumbers,
    sumOfNumbersBetween: basicMath.sumOfNumbersBetween,
    sumOfNumbersFrom: basicMath.sumOfNumbersFrom,
    sumOfSquares: basicMath.sumOfSquares,
    sumOfCubes: basicMath.sumOfCubes,
    isDivisibleBy2: divisibility.isDivisibleBy2,
    isDivisibleBy3: divisibility.isDivisibleBy3,
    isDivisibleBy4: divisibility.isDivisibleBy4,
    isDivisibleBy5: divisibility.isDivisibleBy5,
    isDivisibleBy: divisibility.isDivisibleBy,
    isInRange: range.isInRange,
    isInRangeEx: range.isInRangeEx,
    isInRangeMinInc: range.isInRangeMinInc,
    isInRangeMaxInc: range.isInRangeMaxInc,
    getRandomInRange: range.getRandomInRange,
    getRandomNumberWithLength: range.getRandomNumberWithLength,
    sortAsc: misc.sortAsc,
    sortDesc: misc.sortDesc,
    reverseNumber: misc.reverseNumber,
    countDuplicates: misc.countDuplicates,
    hasIntSquareRoot: misc.hasIntSquareRoot,
    isPythagoreanTriplets: misc.isPythagoreanTriplets
}