// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
// 输入: "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。示例 2:

// 输入: "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
// 示例 3:

// 输入: "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

/**
 * 1. 暴力法---我自己写的
 * O(n^3), 太容易超时了
 */
var lengthOfLongestSubstring = function(s) {
    if(ifIndependentString(s)){
        // console.log(s);
        return s.length;
    }else{
        return Math.max(lengthOfLongestSubstring(s.slice(1)),lengthOfLongestSubstring(s.slice(0,s.length-1)));
    }
};
var ifIndependentString = (s) => {
    let i = 0;

    while(i < s.length && s.lastIndexOf(s[i]) === i){
        i++;
    }
    return i == i.length;
}
// console.time();
// console.log(lengthOfLongestSubstring('bbbbb'))
// console.timeEnd();
/**
 * 2. 滑动窗口，找到每个字符开头的最长子串
 */
var lengthOfLongestSubstring2 = function(s) {
    if(s == "") return 0;
    let i = j = 0, n = s.length;
    let str = '', ans = '';
    for(;i < n; i++){
        j = i;
        while(j < n){
           if(!ans.includes(s[j])){
               ans += s[j];
               j++;
           }else{
               if(ans.length > str.length){
                   str = ans;
               }
               ans = '';
               break;
           }
        }
    }
    if(str.length == 0) return 1;
    return str.length;
};
console.time();
console.log(lengthOfLongestSubstring2(' '))
console.timeEnd();
