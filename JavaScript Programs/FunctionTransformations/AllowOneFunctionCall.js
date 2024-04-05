/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let hasBeenCalled = false;
    
    return function(...args){
        if(!hasBeenCalled){
            hasBeenCalled = true;
            return fn(...args);
        } 
    }
};


let fn = (a,b,c) => (a + b + c)
let onceFn = once(fn)

// 6
console.log(onceFn(1,2,3))
 // returns undefined without calling fn
console.log(onceFn(1,2,3))
