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
module.exports = {
    sortAsc: sortAsc,
    sortDesc: sortDesc,
    reverseNumber: reverseNumber,
    countDuplicates: countDuplicates,
    hasIntSquareRoot: hasIntSquareRoot,
    isPythagoreanTriplets: isPythagoreanTriplets
};