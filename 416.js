// https://leetcode.cn/problems/partition-equal-subset-sum/

function canPartition(nums) {
    const n = nums.length;
    if (n < 2) {
        return false;
    }
    let sum = 0, maxNum = 0;
    for(const num of nums) {
        sum += num;
        maxNum = Math.max(num, maxNum);
    }

    // 如果sum 是奇数， 就不存在等和子集
    if (sum & 1) {
        return false
    }

    const target = Math.floor(sum / 2);

    // 最大值大于平均值，也不存在
    if (maxNum > target) {
        return false
    }

    // 优化空间之后的动态规划，每一行的状态只与前一行有关
    const dp = new Array(target + 1).fill(false);
    dp[0] = true;

    for(const num of nums) {
        for (let j = target; j >= num; --j) {
            dp[j] |= dp[j - num];
        }
    }
    return dp[target];
};

canPartition([1,2,3,6])