/**
 * 给定 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

说明：你不能倾斜容器，且 n 的值至少为 2。



图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。

 

示例:

输入: [1,8,6,2,5,4,8,3,7]
输出: 49
 */
// 1.暴力法
var maxArea = function(height) {
    let max = 0;
    let len = height.length;
    for(let i = 0; i < len ; i++){
        for(let j = i+1; j < len; j++){
            let temp = (j-i) * Math.min(height[i],height[j]);
            max = max > temp ? max : temp;
        }
    }
    return max;
};
// 1.双指针法
var maxArea2 = function(height) {
    let max = 0;
    let i = 0, j = height.length - 1;
    while(i < j){
        let temp = Math.min(height[j],height[i]) * (j - i);
        max = max > temp? max : temp;
        if(height[j] > height[i]) i++;
        else j--;
    }
    return max;
};