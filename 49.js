// https://leetcode.cn/problems/group-anagrams/
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    let obj = {};
    for(let i = 0; i < strs.length; i++) {
        let sortStr = strs[i].split('').sort().join('');
        if(!obj[sortStr]) {
            obj[sortStr] = [];
        }
        obj[sortStr].push(strs[i]);
    }
    return Object.values(obj);
};
const isAnagrams = (str1, str2) => {
    let n1 = str1.length, n2 = str2.length;
    if (n1 !== n2) {
        return false;
    }
    for(let i = 0; i < n1; i++) {
        str2 = str2.replace(str1[i], '');
    }
    return !str2;
}
console.log(isAnagrams('abc', 'acb'))