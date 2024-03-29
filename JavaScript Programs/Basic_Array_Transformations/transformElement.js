/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */


var map = function(arr, fn) {
    const transFormedArr = []
    for(let i = 0; i < arr.length; i++){
        transFormedArr[i] = fn(arr[i], i);
    }
    return transFormedArr;
};

var res = map([1,2,3], fn = function(){
    return 42
})

console.log(res)

