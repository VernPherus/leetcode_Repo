/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let res = false

    let s_filtered = s.replace(/[^0-9a-z]/gi, '').toLowerCase()
    let s_reversed = s_filtered.split("").reverse().join("")

    if(s_filtered === s_reversed) res = true

    return res
};

console.log(isPalindrome("race a car"))