/*
 * Created by Chris Rabe 19/04/18
 */

const calculate = require('./helpers/calculate');
const convert = require('./helpers/convert');

const impl1 = require('./impl/impl1');

// passing a number
exports.numToString = (original) => {
    const num = convert.scientificToDecimal(Math.abs(original));
    const values = convert.toIntArray(num.toString().split('.')); // split at decimal
    if(values.length < 1){
        throw new Error('please enter a value');
    }
    let res = original < 0 ? 'negative ' : '';
    const first = convert.scientificToDecimal(values[0]);
    const n = calculate.n(first);
    impl1.appendString(result => {res = res + result;}, first, n);
    // append decimal
    if(values[1] != null){
        res += ' point ';
        const second = convert.scientificToDecimal(values[1]);
        const n = calculate.n(second);
        impl1.appendString(result => {res = res + result;}, second, n);
    }
    return res;
}
