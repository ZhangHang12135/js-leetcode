// https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/
var searchRange = function(nums, target) {
    let left = 0, right = nums.length - 1, n = nums.length;
    let res = [];
    while (left < n) {
        if (nums[left] === target) {
            res.push(left);
            break;
        }
        left++;
    }
    if (left === n) {
        return [-1, -1];
    }
    while (right >= left ) {
        if (nums[right] === target) {
            res.push(right);
            break;
        }
        right--;
    }
    return res;
};
const binarySearch = (nums, target, lower) => {
    let left = 0, right = nums.length - 1, ans = nums.length;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] > target || (lower && nums[mid] >= target)) {
            right = mid - 1;
            ans = mid;
        } else {
            left = mid + 1;
        }
    }
    return ans;
}

var searchRange2 = function(nums, target) {
    let ans = [-1, -1];
    const leftIdx = binarySearch(nums, target, true);
    const rightIdx = binarySearch(nums, target, false) - 1;
    if (leftIdx <= rightIdx && rightIdx < nums.length && nums[leftIdx] === target && nums[rightIdx] === target) {
        ans = [leftIdx, rightIdx];
    } 
    return ans;
};

console.log(searchRange([5,7,7,8,8,10], 8));