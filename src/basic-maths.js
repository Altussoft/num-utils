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
function sumOfNumbers(n1, n2) {
    var result = 0;
    if(arguments.length > 1) {
        for(var i = 0 ; i < arguments.length ; i++) {
            result += arguments[i];
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
function sumOfNumbersBetween(a, b) {
    if(a && b) {
        var result = 0;
        for(var i  = a++ ; i < b ; i++) {
            result += i;
        }
        return result;
    } else {
        return a || b || 0;
    }
}
function sumOfNumbersFrom(a, b) {
    if(a && b) {
        var result = 0;
        for(var i  = a ; i <= b ; i++) {
            result += i;
        }
        return result;
    } else {
        return a || b || 0;
    }
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

function calcAverage(inputArr) {
    if(Array.isArray(inputArr)) {
        var result = sumOfNumbers(inputArr);
        return result/inputArr.length;
    // } else {
    //     throw 'calcAverage input must be an array of numbers';
    }
}

module.exports = {
    isEven: isEven,
    isOdd: isOdd,
    isPositive: isPositive,
    isNegative: isNegative,
    sumOfNumbers: sumOfNumbers,
    sumOfNumbersBetween: sumOfNumbersBetween,
    sumOfNumbersFrom: sumOfNumbersFrom,
    sumOfSquares: sumOfSquares,
    sumOfCubes: sumOfCubes,
    calcAverage: calcAverage
};