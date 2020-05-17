const index = require('../run-length');

const testCases = {
    'a': 'a1',
    'aabb': 'a2b2',
    'aaaaaaaaaabbbbbccccd': 'a10b5c4d1'
};

/**
 * Runs a test and checks whether the output matches the expected value.
 * @param test
 * @param expected
 */
function runTest(test, expected) {
    const output = index.runLength(test);
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
