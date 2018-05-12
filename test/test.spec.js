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
});