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
function getRandomNumberWithLength(len){
    var number = '';
    for(var i=0;i<len;i++){
        number += getRandomInRange(0, 9);
    }
    return parseInt(number, 10);
}
module.exports = {
    isInRange: isInRange,
    isInRangeEx: isInRangeEx,
    isInRangeMinInc: isInRangeMinInc,
    isInRangeMaxInc: isInRangeMaxInc,
    getRandomInRange: getRandomInRange,
    getRandomNumberWithLength: getRandomNumberWithLength
};