/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let setBitCount = 0;
    while(n !== 0){
        n &= (n -1);
        setBitCount++;
        //console.log('>' + n)
    }

    return setBitCount;
};

console.log(hammingWeight(2147483645))