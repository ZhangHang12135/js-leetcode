// https://leetcode.cn/problems/largest-rectangle-in-histogram/
// 暴力法
// var largestRectangleArea = function(heights) {
//     let n = heights.length;
//     let max = 0;
//     for (let i = 0; i < n; i++) {
//         const h = heights[i];
//         let w = 1;
//         let left = i, right = i;
//         while (left - 1 >= 0 && heights[left - 1] >= h) {
//             --left;
//         }
//         while (right + 1 < n && heights[right + 1] >= h) {
//             ++right;
//         }
//         w = right - left + 1;
//         max = Math.max(w * h, max);
//     }
//     return max;
// };
// 单调栈
var largestRectangleArea = function(heights) {
    let n = heights.length;
    const left = [], right = new Array(n).fill(n);
    const stack = [];
    for (let i = 0; i < n; i++) {
        while(stack.length && heights[stack[stack.length - 1]] >= heights[i]) {
            right[stack[stack.length - 1]] = i;
            stack.pop();
        }
        left[i] = stack.length ? stack[stack.length - 1] : -1;
        stack.push(i);
    }
    let ans = 0;
    for (let i = 0; i < n; ++i) {
        ans = Math.max(ans, (right[i] - left[i] - 1) * heights[i]);
    }
    return ans;
};
console.log(largestRectangleArea([2,1,5,6,2,3]))