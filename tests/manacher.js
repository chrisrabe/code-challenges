const index = require('../manacher');

const testCases = {
    'aa': 2,
    'aaa': 3,
    'anna': 4,
    'babad': 3,
    'hackerrekcahba': 12
};


/**
 * Runs a test and checks whether the output matches the expected value.
 * @param test
 * @param expected
 */
function runTest(test, expected) {
    const str = test;
    const n = str.length;
    const output = index.getLongestPalindrome(n, str);
    if(output !== expected){
        console.error(`[FAIL] Expected ${expected}, but got ${output}`);
    } else {
        console.log(`[PASS] Test Input: ${test}`);
    }
}

function runTests() {
    for(const test in testCases){
        const expected = testCases[test];
        runTest(test, expected);
    }
}

module.exports = {
    runTests
}
