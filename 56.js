// https://leetcode.cn/problems/merge-intervals/
var merge = function(intervals) {
    intervals.sort((a,b) => (a[0] - b[0]));
    let slow = fast = 0, n = intervals.length;
    let result = [], current = [];
    while(slow < n) {
        current = intervals[slow]
        let fastInterval = intervals[fast];
        if (fast < n && current[1] >= fastInterval[0]) {
            // 右边界在fast中间 需要合并， 交集关系
            if (current[1] <= fastInterval[1]) {
                current[1] = fastInterval[1];
            }
            // 右边界 fast 外面， 不用处理。包含关系
            // ...
        } else {
            // 右边界在fast 左侧， 无交集
            result.push(current);
            slow = fast;
        }
        fast++;
    }
    return result;
};
merge([[1,3],[2,6],[8,10],[15,18]])