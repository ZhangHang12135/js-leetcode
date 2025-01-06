// https://leetcode.cn/problems/trapping-rain-water/
var trap = function(height) {
    let n = height.length;
    if (n === 0) {
        return 0;
    }
    let leftMax = new Array(n).fill(0);
    leftMax[0] = height[0];
    for(let i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i]);
    }
    let rightMax = new Array(n).fill(0);
    rightMax[n-1] = height[n-1];
    for(let i = n-2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i]);
    }
    let sum = 0;
    console.log(leftMax, rightMax)
    for(let i = 0; i < n; i++) {
        sum += Math.min(leftMax[i], rightMax[i]) - height[i];
    }
    return sum;
};
var trap2 = function(height) {
    let n = height.length;
    if (n === 0) {
        return 0;
    }
    let leftMax = 0, rightMax = 0;
    let left = 0, right = n - 1;
    let ans = 0;
    while(left < right) {
        leftMax = Math.max(height[left], leftMax);
        rightMax = Math.max(height[right], rightMax);
        if (height[left] < height[right]) {
            ans += leftMax - height[left];
            left++;
        } else {
            ans += rightMax - height[right];
            right--;
        }
    }
    return ans;
};
trap2([0,1,0,2,1,0,1,3,2,1,2,1]);