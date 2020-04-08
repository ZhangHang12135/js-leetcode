/**
 * 给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。

例如，给出 n = 3，生成结果为：

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/generate-parentheses
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var generateParenthesis = function(n) {
    let arr = [];
    backtrack(arr, '', 0, 0, n);
    return arr;
};

var backtrack = function (arr, cur, left, right, max){
    if (cur.length == max*2){
        arr.push(cur);
        return;
    }
    if (left < max) backtrack(arr, cur+'(', left+1, right, max);
    if (right < left) backtrack(arr, cur+')', left, right+1, max);
}