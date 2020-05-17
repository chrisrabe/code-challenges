function runLength(str) {
    let res = "";
    if (str.length === 0) {
        return "";
    }
    if (str.length === 1) {
        return str + "1";
    }
    let count = 1;
    let i = 1;
    while (i < str.length) {
        if (str[i] === str[i - 1]) {
            count++;
        } else {
            res = `${res}${str[i - 1]}${count}`;
            count = 1;
        }
        i++;
    }
    res = `${res}${str[i-1]}${count}`;
    return res;
}

module.exports = {
  runLength
};
