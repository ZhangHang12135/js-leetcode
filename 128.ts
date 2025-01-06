// https://leetcode.cn/problems/longest-consecutive-sequence/
function longestConsecutive(nums: number[]): number {
    const numSet = new Set<number>();
    nums.forEach(num => {
        numSet.add(num);
    });
    let long = 0;
    let current, currentLong;
    for(let x of numSet) {
        
        // 如果存在x - 1 , 那么就说明当前值已经被使用了，可以跳过
        if (!numSet.has(x - 1)) {
            current = x;
            currentLong = 1;
            while(numSet.has(current + 1)) {
                current++;
                currentLong++;
            }
            long = Math.max(long, currentLong);
        }
    }
    return long;
};
longestConsecutive([100,4,200,1,3,2])