// https://leetcode.cn/problems/maximal-rectangle/solution/zui-da-ju-xing-by-leetcode-solution-bjlu/
var maximalRectangle = function(matrix) {
    const m = matrix.length;
    if (m === 0) {
        return 0;
    }
    const n = matrix[0].length;
    const col = new Array(m).fill(0).map(() => new Array(n).fill(0));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === '1') {
                col[i][j] = (i === 0 ? 0 : col[i - 1][j]) + 1;
            }
        }
    }

    let ret = 0;
    for (let i = 0; i < m; i++) {
        ret = Math.max(ret, largestRectangleArea(col[i]))
    }
    return ret;
};
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
maximalRectangle([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"]]);