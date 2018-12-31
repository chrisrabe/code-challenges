
// Assume that passing a number
exports.n = (integer) => {
    var length = integer.toString().length;
    return Math.pow(10, length - 1);
};

// Assume that passing a number
exports.remainder = (original, n) => {
    return original % n;
}

exports.sub_val_remainder = (original, nearest_place, sub_val) => {
    var scale = Math.pow(10, nearest_place); 
    var x = sub_val * scale;
    return original - x; 
}

exports.sub_val = (val, n, nearest_place) => {
    var value = val * n;
    var other = Math.pow(10, nearest_place);
    return parseInt(value / other); 
}

// do binary search
exports.nearest_place = (values, item) => {
    var lo = 0;
    var hi = values.length - 1;
    while(lo < hi)
    {
        var mid = parseInt((lo + hi) / 2);
        var mid_val = values[mid];
        if(mid_val == item){
            return mid_val;
        }

        if(item > mid_val){
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }
    var idx = Math.min(lo, hi);
    var res = values[idx];
    return res > item ? values[idx - 1] : res;
}