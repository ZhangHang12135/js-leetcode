https://leetcode.cn/problems/minimum-window-substring/
// 输入：s = "ADOBECODEBANC", t = "ABC"
// 输出："BANC"
var minWindow = function(s, t) {
    let tLen = t.length, sLen = s.length;
    const tMap = {};
    for(let i = 0; i < tLen; i++) {
        tMap[t[i]] ? tMap[t[i]]++ : tMap[t[i]] = 1;
    }
    const childMap = {};
    let l = 0, r = -1, minL = minR = -1, minLen = +Infinity;
    while(r < sLen) {
        // 扩大窗口
        ++r;
        childMap[s[r]] ? childMap[s[r]]++ : childMap[s[r]] = 1;
        // 当窗口包含目标字符
        while(check(childMap, tMap) && l <= r) {
            if (r - l + 1 < minLen) {
                minLen = r - l + 1;
                minL = l;
                minR = l + minLen;
            } 
            if (childMap[s[l]]) {
                childMap[s[l]]--;
            }
            // 尝试缩小窗口
            ++l;
        }
    }
    return s.slice(minL, minR);
}
const check = (childMap, tMap) => {
    for (const key in tMap) {
        if(!childMap[key] || childMap[key] < tMap[key]) {
            return false;
        }
    }
    return true;
}
console.log(minWindow("cabwefgewcwaefgcf", "cae"))