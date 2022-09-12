// https://leetcode.cn/problems/longest-valid-parentheses/
var longestValidParentheses = function(s) {
    let n = s.length;
    let dp = new Array(n).fill(0);
    let maxLen = 0;
    for (let i = 1; i < n; i++) {
        if (s[i] == ')') {
            if (s[i-1] == '(') {
                dp[i] = (i >= 2 ? dp[i - 2] : 0) + 2;
            } else if (i - dp[i - 1] > 0 && s[i - dp[i - 1] - 1] == '(') {
                dp[i] = dp[i - 1] + ((i - dp[i - 1]) >= 2 ? dp[i - dp[i - 1] - 2] : 0) + 2;
            }
            maxLen = Math.max(maxLen, dp[i]);
        }
    }
    return maxLen;
};
// 栈
var longestValidParentheses2 = function(s) {
    let n = s.length;
    let dp = [-1];
    let maxLen = 0;
    for (let i = 0; i < n; i++) {
        if (s[i] === '(') {
            dp.push(i);
        } else {
            dp.pop();
            if (!dp.length) {
                dp.push(i);
            } else {
                maxLen = Math.max(maxLen, i - dp[dp.length - 1]);
            }
        }
    }
    return maxLen;
};
console.log(longestValidParentheses2(')()())'));