/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    var val = init
    for(let i = 0; i < nums.length; i++){
        val = fn(val, nums[i])
    }
    return val
};

var res = reduce([1,2,3,4], fn=function sum(accum, curr){
    return accum + curr * curr
}, 100)

console.log(res)
