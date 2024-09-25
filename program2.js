/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    if(s.length === 0){
        return 0;
    }

    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    const length = s.length;

    for(let i = 0; i < length; i++) {
        const currentVal = romanMap[s[i]];
        const nextVal = i + 1 < length ? romanMap[s[i + 1]] : 0;

        if (currentVal < nextVal){
            total -= currentVal;
        } else {
            total += currentVal;
        }
    }
    return total;
};


module.exports={romanToInt}
