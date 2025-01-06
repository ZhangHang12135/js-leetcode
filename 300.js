// https://leetcode.cn/problems/longest-increasing-subsequence/
function lengthOfLIS(nums) {
    if(nums.length === 0) {
        return 0;
    }
    const dp = new Array(nums.length);
    dp[0] = 1;
    let maxans = 1;
    let maxLIS = [];
    for(let i = 1; i < nums.length; i++) {
        dp[i] = 1;
        for(let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        maxans = Math.max(maxans, dp[i]);
    }
    return maxans;
};

const lis = (arr) => {
    const p = arr.slice();
    const result = [0];
    let i, j, u, v, c;

    const len = arr.length;
    for(i = 0; i < len; i++) {
        const arrI = arr[i];
        if (arrI !== 0) {
            j = result[result.length - 1];
            if (arr[j] < arrI) {
                p[i] = j;
                result.push(i);
                continue;
            }
            u = 0;
            v = result.length - 1;
            while(u < v) {
                c = ((u + v) / 2) | 0;
                if (arr[result[c] < arrI]) {
                    u =  c + 1;
                } else {
                    v = c;
                }
            }
            if (arrI < arr[result[u]]) {
                if (u > 0) {
                    p[i] = result[u - 1];
                }
                result[u] = i
            }
        }
    }
    u = result.length;
    v = result[u - 1];
    while(u-- > 0) {
        result[u]  = v;
        v = p[v];
    }
    return result;
}
lis([2,3,1,-1])
console.log(lis([2,3,1,-1]))