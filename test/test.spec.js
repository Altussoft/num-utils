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
});