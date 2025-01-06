// https://leetcode.cn/problems/jump-game/
var canJump = function(nums) {
    let f = new Array(nums.length).fill(false);
    f[0] = true;
    for(let i = 0; i < nums.length - 1; i++) {
        let n = nums[i], j = 0;
        let index = 0;
        while(j <= n && i + j < nums.length) {
            f[i + j] = true;
            j++;
        }
        if (!f[i + 1]) {
            break;
        }
    }
    return f[nums.length - 1]
};
canJump([3,2,1,0,4]);