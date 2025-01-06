function searchInsert(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;

    if (target <= nums[left]) {
        return left;
    }
    if (target >= nums[right]) {
        return right + 1
    }
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left;
};

searchInsert([1,3,5,6], 5);