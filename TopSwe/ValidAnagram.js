/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let res = false

    if(s.length != t.length) return res

    const s_char = s.split('')
    const t_char = t.split('')

    if (s_char.sort().join(',') === t_char.sort().join(',')) res = true
    return res
};

const res = isAnagram("hello", "alsds")

console.log(res)
