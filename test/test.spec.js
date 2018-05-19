'use strict';

var expect = require('chai').expect;
var nu = require('../index');

describe('#num-utils', function() {
    it('should identify if a given number is even', function() {
        var result = nu.isEven(4);
        expect(result).to.be.true;
    });
    it('should identify if a given number is odd', function() {
        var result = nu.isOdd(4);
        expect(result).to.be.false;
    });
    it('should identify if a given number is Positive', function() {
        var result = nu.isPositive(-4);
        expect(result).to.be.false;

        result = nu.isPositive(2);
        expect(result).to.be.true;
    });
    it('should identify if a given number is Negative', function() {
        var result = nu.isNegative(-8);
        expect(result).to.be.true;

        result = nu.isNegative(5);
        expect(result).to.be.false;
    });
    it('should identify if a given number is divisible by 2', function() {
        var result = nu.isDivisibleBy2(-8);
        expect(result).to.be.true;

        result = nu.isDivisibleBy2(5);
        expect(result).to.be.false;
    });
    it('should identify if a given number is divisible by 3', function() {
        var result = nu.isDivisibleBy3(8);
        expect(result).to.be.false;

        result = nu.isDivisibleBy3(30);
        expect(result).to.be.true;
    });
    it('should identify if a given number is divisible by 4', function() {
        var result = nu.isDivisibleBy4(8);
        expect(result).to.be.true;

        result = nu.isDivisibleBy4(30);
        expect(result).to.be.false;
    });
    it('should identify if a given number is divisible by 5', function() {
        var result = nu.isDivisibleBy5(25);
        expect(result).to.be.true;

        result = nu.isDivisibleBy5(32);
        expect(result).to.be.false;
    });
    it('should identify if a input number is divisible by another number', function() {
        var result = nu.isDivisibleBy(64, 8);
        expect(result).to.be.true;

        result = nu.isDivisibleBy4(30, 4);
        expect(result).to.be.false;
    });
    it('should identify if a given number is within a given range', function() {
        var result = nu.isInRange(10, 2, 23);
        expect(result).to.be.true;
    });
    it('should identify if a given number is within a given range with the min and max included', function() {
        var result = nu.isInRangeEx(10, 2, 23);
        expect(result).to.be.true;

        result = nu.isInRangeEx(10, 10, 23);
        expect(result).to.be.false;
    });
    it('should identify if a given number is within a given range with the min included', function() {
        var result = nu.isInRangeMinInc(10, 10, 23);
        expect(result).to.be.true;
    });
    it('should identify if a given number is within a given range with the max included', function() {
        var result = nu.isInRangeMaxInc(10, 2, 10);
        expect(result).to.be.true;

        var result = nu.isInRangeMaxInc(2, 2, 10);
        expect(result).to.be.false;
    });
    it('should return a random integer from the given range', function() {
        var result = nu.getRandomInRange(10, 20);
        expect(result).to.be.above(9);
        expect(result).to.be.below(21);
    });
    it('should calculate the average from a given array of numbers', function() {
        var input = [1,2,3,4,5,6,7,8,9,10];
        var result = nu.calcAverage(input);
        expect(result).to.be.finite;
        expect(result).to.equal(5.5);

        // expect(nu.calcAverage(1,2)).to.throw();
    });
    it('should calculate sum of given array of numbers or sum of n integers', function() {
        var input = [1,2,3,4,5,6,7,8,9,10];
        var result = nu.sumOfNumbers(input);
        expect(result).to.equal(55);

        result = nu.sumOfNumbers(5);
        expect(result).to.equal(15);

        result = nu.sumOfNumbers(5,10, 12 , 13);
        expect(result).to.equal(40);
    });
    it('should calculate sum of numbers between two given numbers', function() {
        var result = nu.sumOfNumbersBetween(2, 5);
        expect(result).to.equal(9);

        result = nu.sumOfNumbersBetween(2, null);
        expect(result).to.equal(2);
        result = nu.sumOfNumbersBetween(null, 5);
        expect(result).to.equal(5);
        result = nu.sumOfNumbersBetween(null, null);
        expect(result).to.equal(0);
    });
    it('should calculate sum of numbers between two given numbers including the given numbers', function() {
        var result = nu.sumOfNumbersFrom(2, 5);
        expect(result).to.equal(14);
        
        result = nu.sumOfNumbersFrom(2, null);
        expect(result).to.equal(2);
        result = nu.sumOfNumbersFrom(null, 5);
        expect(result).to.equal(5);
        result = nu.sumOfNumbersFrom(null, null);
        expect(result).to.equal(0);
    });
    it('should identify if a given set of 3 numbers are Pythagorean Triplets', function() {
        var result = nu.isPythagoreanTriplets(6, 8 ,10);
        expect(result).to.be.true;

        var result = nu.isPythagoreanTriplets(6, 8 ,12);
        expect(result).to.be.false;
    });
    it('should identify if a number has an integer square root', function() {
        var result = nu.hasIntSquareRoot(25);
        expect(result).to.be.true;

        var result = nu.hasIntSquareRoot(20);
        expect(result).to.be.false;
    });
    it('should return the sum of suqares of number in array provided or all the numbers provided', function() {
        var result = nu.sumOfSquares(2, 3, 4);
        expect(result).to.equal(29);

        var result = nu.sumOfSquares([1, 2, 3, 4]);
        expect(result).to.equal(30);
    });
    it('should return the sum of cubes of number in array provided or all the numbers provided', function() {
        var result = nu.sumOfCubes(2, 3, 4);
        expect(result).to.equal(99);

        var result = nu.sumOfCubes([1, 2, 3, 4]);
        expect(result).to.equal(100);
    });
    it('should return a ascending sorted array from a given number of inputs or given array', function() {
        var result = nu.sortAsc(23, 8, 12, 54);
        expect(result).to.deep.equal([ 8, 12,23, 54 ]);

        var result = nu.sortAsc([23, 8, 12, 54]);
        expect(result).to.deep.equal([ 8, 12,23, 54 ]);
    });
    it('should return a descending sorted array from a given number of inputs or given array', function() {
        var result = nu.sortDesc(23, 8, 12, 54);
        expect(result).to.deep.equal([ 54, 23, 12, 8 ]);

        var result = nu.sortDesc([23, 8, 12, 54]);
        expect(result).to.deep.equal([ 54, 23, 12, 8 ]);
    });
    it('should reverse the digits in a given number', function() {
        var result = nu.reverseNumber(123456789);
        expect(result).to.equal(987654321);
    });
    it('should return the count of duplicates in the given array or list of arguments', function() {
        var result = nu.countDuplicates([1,1,2,2,2,3,3,4,5,5,5,6,6,6,7,7,8]);
        expect(result).to.deep.equal({ '1': 2, '2': 3, '3': 2, '5': 3, '6': 3, '7': 2 });

        var result = nu.countDuplicates(1,1,2,2,2,3,3,4,5,5,5,6,6,6,7,7,8);
        expect(result).to.deep.equal({ '1': 2, '2': 3, '3': 2, '5': 3, '6': 3, '7': 2 });
    });
    it('should generate a number with specified numberof digits', function() {
        var result = nu.getRandomNumberWithLength(3);
        expect(result.toString()).to.be.lengthOf(3);
    });
});