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
function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function calcAverage(inputArr) {
    if(Array.isArray(inputArr)) {
        var result = sumOfNumbers(inputArr);
        return result/inputArr.length;
    // } else {
    //     throw 'calcAverage input must be an array of numbers';
    }
}
function sumOfNumbers(n1, n2) {
    var result = 0;
    if(arguments.length === 2) {
        for(var i  = n1 ; i <= n2 ; i++) {
            result += i;
        }
    } else {
        if(Array.isArray(n1)) {
            n1.forEach(function(item, idx) {
                result += item;
            });
        } else if(Number.isInteger(n1)) {
            for(var i  = 0 ; i <= n1 ; i++) {
                result += i;
            }
        // } else {
        //     throw 'sumOfNumbers input must be either anarray of numbers or an integer'
        }
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
function hasIntSquareRoot(input) {
    return Number.isInteger(Math.sqrt(input));
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
function sumOfSquares(inputArr) {
    var args = arguments;
    var result = 0;
    //if an array
    if(args.length === 1) {
        inputArr.forEach(getSquares);
    } else {
        for(var i=0; i<args.length; i++){
            getSquares(args[i]);
        }
    }
    function getSquares(item) {
        result += Math.pow(item, 2);
    }
    return result;
}
function sumOfCubes(inputArr) {
    var args = arguments;
    var result = 0;
    //if an array
    if(args.length === 1) {
        inputArr.forEach(getCubes);
    } else {
        for(var i=0; i<args.length; i++){
            getCubes(args[i]);
        }
    }
    function getCubes(item) {
        result += Math.pow(item, 3);
    }
    return result;
}
function sortAsc(input) {
    var temp = [];
    if(arguments.length === 1 && Array.isArray(input)) {
        temp = sortArr(input);
    } else {
        var args = arguments;
        temp = sortArr(Array.from(args));
    }
    function sortArr(arr) {
        return arr.sort(function(a, b) {
            return a - b;
        });
    }
    return temp;
}
function sortDesc(input) {
    var temp = [];
    if(arguments.length === 1 && Array.isArray(input)) {
        temp = sortArr(input);
    } else {
        var args = arguments;
        temp = sortArr(Array.from(args));
    }
    function sortArr(arr) {
        return arr.sort(function(a, b) {
            return b - a;
        });
    }
    return temp;
}
function reverseNumber(input) {
    var i = input + '';
    i = i.split('').reverse().join('');
    return parseInt(i, 10);
}
function countDuplicates(inputArr) {
    if(arguments.length ===1 && Array.isArray(inputArr)) {
        return count(inputArr);
    } else {
        return count(Array.from(arguments));
    }
    function count(arr) {
        var result = {};
        for(var i=0;i<arr.length;i++) {
          for(var j=0;j<i;j++) {
            if(arr[i]===arr[j]) {
              if(result[arr[j]]){
                result[arr[j]]++;
              } else {
                result[arr[j]] = 2;
              }
              break;
            }
          }
        }
        return result;
    }
}
function getRandomNumberWithLength(len){
    var number = '';
    for(var i=0;i<len;i++){
        number += getRandomInRange(0, 9);
    }
    return parseInt(number, 10);
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
    getRandomInRange: getRandomInRange,
    calcAverage: calcAverage,
    sumOfNumbers: sumOfNumbers,
    isPythagoreanTriplets: isPythagoreanTriplets,
    hasIntSquareRoot: hasIntSquareRoot,
    sumOfSquares: sumOfSquares,
    sumOfCubes: sumOfCubes,
    sortAsc: sortAsc,
    sortDesc: sortDesc,
    reverseNumber: reverseNumber,
    countDuplicates: countDuplicates,
    getRandomNumberWithLength: getRandomNumberWithLength
}