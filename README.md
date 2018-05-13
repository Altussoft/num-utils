[![Build Status](https://travis-ci.org/akbeeram/num-utils.svg?branch=master)](https://travis-ci.org/akbeeram/num-utils)
[![Coverage Status](https://coveralls.io/repos/github/akbeeram/num-utils/badge.svg?branch=master)](https://coveralls.io/github/akbeeram/num-utils?branch=master)
[![GitHub license](https://img.shields.io/github/license/akbeeram/num-utils.svg)](https://github.com/akbeeram/num-utils/blob/master/LICENSE)
[![npm version](https://badge.fury.io/js/num-utils.svg)](https://badge.fury.io/js/num-utils)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/react.svg)](https://www.npmjs.com/package/num-utils)
[![node](https://img.shields.io/node/v/passport.svg)](https://www.npmjs.com/package/num-utils)
<!--[![GitHub release](https://img.shields.io/github/release/akbeeram/num-utils.svg)](https://GitHub.com/akbeeram/num-utils/releases/) -->
[![GitHub contributors](https://img.shields.io/github/contributors/akbeeram/num-utils.svg)](https://GitHub.com/akbeeram/num-utils/graphs/contributors/)
[![GitHub issues](https://img.shields.io/github/issues/akbeeram/num-utils.svg)](https://GitHub.com/akbeeram/num-utils/issues/)
[![GitHub issues-closed](https://img.shields.io/github/issues-closed/akbeeram/num-utils.svg)](https://GitHub.com/akbeeram/num-utils/issues?q=is%3Aissue+is%3Aclosed)
[![GitHub pull-requests](https://img.shields.io/github/issues-pr/akbeeram/num-utils.svg)](https://GitHub.com/akbeeram/num-utils/pull/)

# num-utils

A small and simple library for number utility functions

## Installation

    npm install num-utils

## Usage

    var nu = require('num-utils');
    nu.isEven(3); // => false

    nu.isNegative(-5); // => true

** Divisibility Functions

    nu.isDivisibleBy3(5); // => false
    nu.isDivisibleBy3(27); // => true

    nu.isDivisibleBy(22, 4); // => false

** Range Functions

    nu.isInRange(10, 2, 23); // => true
    nu.isInRangeMinInc(4, 4, 9); // => true

## Tests

    npm test