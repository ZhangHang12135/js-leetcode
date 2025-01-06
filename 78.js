// https://leetcode.cn/problems/subsets/
var subsets = function(nums) {
    let t = [];
    let ans = [];
    const dfs = (cur) => {
        if(cur === nums.length) {
            ans.push(t.slice());
            return;       
        }
        t.push(nums[cur]);
        dfs(cur + 1);
        t.pop();
        dfs(cur + 1);
    }
    dfs(0);
    return ans;
};
console.log(subsets([1,2,3]));