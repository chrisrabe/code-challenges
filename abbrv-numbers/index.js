/*
 * Created by Chris Rabe on 26/12/18
 *
 * Challenge Description:
 * https://stackoverflow.com/questions/2692323/code-golf-friendly-number-abbreviator
 */

const abbreviations = " KMGTPE";

/**
 * Abbreviates a number and rounds off the value into the decimal format.
 * @param {number} number
 * @param {number} decimal
 * @return {string}
 */
function abbreviateNumber(value, decimal) {
    // find place value of length to determine abbreviation
    let placeVal = value.length - (value.length % 3);
    // create the scale values
    const scale1 = Math.pow(10, +decimal); // adds a few zeroes to avoid cutting it out during shortening
    let scale2 = Math.pow(10, placeVal); // shortens the value
    // validity check. There's a bug where it doesn't give the correct place value if the length
    // of the value is equal to the scale2 length. For example, 900,000 is given a place value of 6, when
    // in reality, it needs to be in the place value of 1000.
    if((scale2.toString().length - 1) === value.length) {
        placeVal-=3;
        scale2 = Math.pow(10, placeVal);
    }
    // shorten value
    // this code follows this logic sequence:
    // 1. shift values to the left by adding zeroes at the end of the original value. For example, if
    // the original value is 9342, and the decimal parameter is 3, the first step transforms it to 9342000.
    // The number of zeroes depend on the decimal values.
    //
    // 2. shortens the value using scale2. From our original example, scale2 would be equal to 1000 because
    // its place value is in the thousands (10^3). The second step would evaluate 9342000 / 1000 = 9342.
    //
    // 3. shift values to the right by dividing scale1 to the result of the second step. In our example,
    // the third step would evaluate 9324 / 1000 = 9.324
    //
    const result = Math.round(+value * scale1 / scale2) / scale1;
    const abbr = abbreviations[placeVal/3];
    return `${result}${abbr}`;
}

module.exports = {
    abbreviateNumber
}
