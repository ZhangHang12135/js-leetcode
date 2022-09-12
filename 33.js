// https://leetcode.cn/problems/search-in-rotated-sorted-array/
var search = function(nums, target) {
    let left = 0, right = nums.length - 1;
    if (right === 0) {
        return nums[0] === target ? 0 : -1;
    }
    while(left <= right) {
        let mid = Math.floor(left + right);
        if (target === nums[mid]) {
            return mid;
        }
        // 左侧有序
        if (nums[mid] >= nums[0]) {
            if (target < nums[mid] && target >= nums[0]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (target > nums[mid] && target <= nums[nums.length -1]) {
                left = mid + 1;
            } else {
                right = mid - 1
            }
        }
    }
    return -1
};
search([4,5,6,7,0,1,2,3], 0);