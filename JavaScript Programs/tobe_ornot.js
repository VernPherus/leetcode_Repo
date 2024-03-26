/**
 * @param {string} val
 * @return {Object}
 */

/* Code did not work
var expect = function(val) {
    
    function toBe(x){
        if(val === x) return true;
        else return "Not Equal";
    }

    function notToBe(x){
        if (val === x) return "Equal";
        else return true;
    }

};


var res = expect(5).toBe(5);
console.log(res);
/*

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */

//Solution:

var expect = function(val){
    return{
        toBe: (val2) => {
            if(val !== val2) throw new Error("Not Equal");
            else return true;
        },
        notToBe: (val2) =>{
            if(val === val2) throw new Error("Equal");
            else return true;
        }
    }
};

console.log(expect(5).toBe(5));
