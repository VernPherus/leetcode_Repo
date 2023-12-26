
var createCounter = function(n){
    return () => n++
}


const counter = createCounter(-2)
console.log(counter())
console.log(counter())
console.log(counter())


/*
 * 
 * Closure concept:
 * A closure is created when a function is defined inside another function, and the inner function references variables in the outer function's scope.
 * Closures are useful for creating private variables and functions, implementing partial function application, and preserving state in asynchronous code.
 * 
 */

const makeCounter = function(n){
    let count = 0 //private variable only accessed by function, retains its value
    //let declared inside blocks cannot be accessed outside.
    return () => {
        count++;
        console.log(count);
    }
}