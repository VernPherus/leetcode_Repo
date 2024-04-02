/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let i = 0
    for(const num of nums){
        if(num !== 0){
            nums[i] = num;
            i++;
        }
    }
    while(i<nums.length){
        nums[i]=0;
        i++;
    }
};

