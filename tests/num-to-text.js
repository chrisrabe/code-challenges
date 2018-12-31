const index = require('../num-to-text');
// Tests
function runTests () {
    const output1 = index.numToString(60.200);
    console.log('-- Test 1 --');
    console.log(`Expected: sixty point two`);
    console.log(`Actual: ${output1}`);

    const output3 = index.numToString(10000.2);
    console.log('-- Test 3 --');
    console.log(`Expected: ten thousand point two`);
    console.log(`Actual: ${output3}`);

    const output4 = index.numToString(100000.2);
    console.log('-- Test 4 --');
    console.log(`Expected: one hundred thousand point two`);
    console.log(`Actual: ${output4}`);

    const output5 = index.numToString(10000000.2);
    console.log('-- Test 5 --');
    console.log(`Expected: ten million point two`);
    console.log(`Actual: ${output5}`);

    const output6 = index.numToString(10000000000.2);
    console.log('-- Test 6 --');
    console.log(`Expected: ten billion point two`);
    console.log(`Actual: ${output6}`);

    const output7 = index.numToString(10000000000000.2);
    console.log('-- Test 7 --');
    console.log(`Expected: ten trillion point two`);
    console.log(`Actual: ${output7}`);

    const output8 = index.numToString(61.2);
    console.log('-- Test 8 --');
    console.log(`Expected: sixty one point two`);
    console.log(`Actual: ${output8}`);

    const output9 = index.numToString(161.2);
    console.log('-- Test 9 --');
    console.log(`Expected: one hundred sixty one point two`);
    console.log(`Actual: ${output9}`);

    const output10 = index.numToString(12161.2);
    console.log('-- Test 10 --');
    console.log(`Expected: twelve thousand one hundred sixty one point two`);
    console.log(`Actual: ${output10}`);

    const output11 = index.numToString(112161.2);
    console.log('-- Test 11 --');
    console.log(`Expected: one hundred twelve thousand one hundred sixty one point two`);
    console.log(`Actual: ${output11}`);

    const output12 = index.numToString(123456789.2);
    console.log('-- Test 12 --');
    console.log('Expected: one hundred twenty three million four hundred fifty six thousand seven hundred eighty nine point two');
    console.log(`Actual: ${output12}`);

    const output13 = index.numToString(-161);
    console.log('-- Test 13 --');
    console.log('Expected: negative one hundred sixty one');
    console.log(`Actual: ${output13}`);

    console.log('-- Test 14 [BENCHMARK] -- ');
    const start = new Date().getTime();
    const output14 = index.numToString(2345678912323456789122345678912);
    const end = new Date().getTime();
    const taken = end - start;
    console.log(`Result: ${output14}`)
    console.log(`Time taken: ${taken} ms`);
}

module.exports = {
    runTests
}
