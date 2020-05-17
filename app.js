/*
 * Created by Chris Rabe 31/12/18
 *
 * Runs all the test cases in the test folder
 */

const numToTextTests = require('./tests/num-to-text');
const abbrvNumbersTests = require('./tests/abbrv-numbers');
const manacher = require('./tests/manacher');
const runLength = require('./tests/run-length');

// Run test cases
console.log('\nNum To Text Tests\n');
numToTextTests.runTests();
console.log('\nAbbreviate Numbers Tests\n');
abbrvNumbersTests.runTests();
console.log('\nManacher Algorithm Tests\n');
manacher.runTests();
console.log('\nRun Length Algorithms Tests\n');
runLength.runTests();



