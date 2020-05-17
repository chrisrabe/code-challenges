/*
 * Created by Chris Rabe 31/12/18
 *
 * Runs all the test cases in the test folder
 */

const numToTextTests = require('./tests/num-to-text');
const abbrvNumbersTests = require('./tests/abbrv-numbers');
const manacher = require('./tests/manacher');

// Run test cases
// numToTextTests.runTests();
// abbrvNumbersTests.runTests();
manacher.runTests();



