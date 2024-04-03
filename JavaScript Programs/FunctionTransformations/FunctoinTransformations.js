/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    if(functions.length === 0){
        return function(x) {return x}
    }

    return functions.reduceRight(function(prevFn, nextFn){ 
        return function(x){
            return nextFn(prevFn(x))
        }
    });
};


// const arr = [1,2,3,4,5]
// var sum = arr.reduceRight((prev, curr)=>{
//     return prev + curr;
// });

const funcArr = [x => x + 1, x => x * 2, x => x - 1];
var funcRes = funcArr.reduceRight((prev, curr)=>{
    return function(x){
        return prev(curr(x))
    };
});

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

const fn = compose([x => x + 1, x => 2 * x])

console.log(funcRes(2))