const index = require('../abbrv-numbers');

const testCases = {
    "12 1" : "12",
    "1500 2": "1.5K",
    "1500 0": "2K",
    "0 2": "0",
    "1234 0": "1K",
    "34567 2": "34.57K",
    "918395 1": "918.4K",
    "923440000 1": "923.4M",
    "1100 1": "1.1K",
    "2134124 2": "2.13M",
    "47475782130 2" : "47.48G",
    "9223372036854775807 3": "9.223E",
    "9342 3": "9.342K"
};

/**
 * Runs a test and checks whether the output matches the expected value.
 * @param test
 * @param expected
 */
function runTest(test, expected) {
    const args = test.split(' ');
    const output = index.abbreviateNumber(args[0], args[1]).trim();
    if(output != expected){
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
