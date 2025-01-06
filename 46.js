// https://leetcode.cn/problems/permutations/
var permute = function(nums) {
    let result = [];
    let n = nums.length;
    let output = nums.slice();
    if (n === 1) {
        return nums;
    }
    backtrack(n, output, result, 0);
    return result;
};

const backtrack = (n, output, result,idx) => {
    if (idx === n) {
        result.push(output.slice());
        return;
    }
    for(let i = idx; i < n; i++) {
        [output[idx], output[i]] = [output[i], output[idx]];
        backtrack(n, output, result, idx + 1);
        [output[idx], output[i]] = [output[i], output[idx]];
    }
}

console.log(permute([1]));