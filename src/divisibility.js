var basicMath = require('./basic-maths');
//divisibility
function isDivisibleBy2(input) {
    return basicMath.isEven(input);
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
    isDivisibleBy2: isDivisibleBy2,
    isDivisibleBy3: isDivisibleBy3,
    isDivisibleBy4: isDivisibleBy4,
    isDivisibleBy5: isDivisibleBy5,
    isDivisibleBy: isDivisibleBy
};