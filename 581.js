function findUnsortedSubarray(nums) {
    if (isSort(nums)) {
      return 0
    }
    const sortNum = [...nums].sort((a, b) => (a - b));
    let left = 0;
    while(sortNum[left] === nums[left]) {
      left++;
    }
    let right = nums.length - 1;
    while(sortNum[right] === nums[right]) {
      right--;
    }
    return right + left - 1;
    function isSort(nums) {
      for(let i = 1; i < nums.length; i++) {
        if (nums[i - 1] > nums[i]) {
          return false;
        }
      }
      return true;
    }
  };

  findUnsortedSubarray([2,1])