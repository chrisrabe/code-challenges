var calculate = require('../helpers/calculate');
var map = require('../helpers/mappings');

exports.appendString = (callback, original, n) => {
    if(original == 0){
        callback('zero');
        return;
    }
    // get needed variables
    var val = parseInt(original / n); // value in the nth place
    var place = original.toString().length - 1; // place value
    // console.log('append_string', original, val, place);

    // check if special case is applied
    var special = map.special_cases[original];

    if(special != null){ // exact match - append special
        callback(special);
    } else {
        // convert to string
        var string_place = map.place_value[place];
        // place value needs to be truncated
        if(string_place == null) // e.g. ten hundred million
        {
            var nearest_place = calculate.nearest_place(Object.keys(map.place_value), place);
            var raw_val = original / n;
            var sub_val = calculate.sub_val(raw_val, n, nearest_place);
            var sub_n = calculate.n(sub_val);
            // console.log('string_place', sub_val, sub_n, nearest_place);
            exports.appendString(callback, sub_val, sub_n);
            callback(map.place_value[nearest_place]);
            // calculate remainder based on sub value
            if(map.special_cases[sub_val] != null)
            {
                var remainder = calculate.sub_val_remainder(original, nearest_place, sub_val);
                if(remainder != 0){
                    var rem_n = calculate.n(remainder);
                    callback(' ');
                    exports.appendString(callback, remainder, rem_n);
                }
                return;
            }
            n = Math.pow(10, nearest_place);
        } else {
            var string_val = (place == 1 ? map.tens_special_cases[val] : null) != null && place == 1 ? map.tens_special_cases[val] : map.to_nine[val];
            callback(`${string_val}${string_place}`);
        }
    }
    // Handle remainder
    if(special != null){ // special doesn't need remainder
        return; // exit here
    }
    var remainder = calculate.remainder(original, n);
    if(remainder != 0){
        var rem_n = calculate.n(remainder);
        callback(' ');
        exports.appendString(callback, remainder, rem_n);
    }
}
