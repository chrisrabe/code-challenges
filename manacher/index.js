function getLongestPalindrome(n, str) {
    const T = '#' + str.split('').join('#') + '#';
    const P = new Array(n).fill(0);
    let C = 0;
    let R = -1;
    let rad;
    for (let i = 0; i < T.length; i++) {
        if (i <= R) {
            rad = Math.min(P[2*C-i], R-i);
        } else {
            rad = 0;
        }
        // Try to extend
        while (i+rad < T.length && i-rad >= 0 && T[i-rad] === T[i+rad]) {
            rad++;
        }
        P[i] = rad;
        if (i+rad - 1 > R) {
            C = i;
            R = i + rad - 1;
        }
    }
    return Math.max(...P) - 1;
}

function getLongestPalindromeWord(input) {
    const T = '#' + input.split('').join('#') + '#';
    const n = T.length;
    const P = new Array(n).fill(0);
    let C = 0;
    let R = -1;
    let rad;

    for (let i = 0; i < T.length; i++) {
        if (i <= R) {
            rad = Math.min(P[2*C-i], R - i);
        } else {
            rad = 0;
        }
        // Try to expand
        while (i+rad < T.length && i-rad >= 0 && T[i-rad] === T[i+rad]) {
            rad++;
        }
        P[i] = rad;
        if (i+rad - 1 > R) {
            C = i;
            R = i + rad - 1;
        }
    }
    let maxLength = 0;
    let maxIndex = -1;
    // find longest length and record index
    for (let i = 0; i < P.length; i++) {
        if (P[i] > maxLength) {
            maxLength = P[i] - 1;
            maxIndex = i;
        }
    }
    // get letters left and right
    const leftMost = maxIndex - maxLength;
    const rightMost = maxIndex + maxLength;
    const subString = T.substring(leftMost, rightMost + 1).replace(/#/g, '');
    return subString;
}

module.exports = {
    getLongestPalindrome,
    getLongestPalindromeWord
}
