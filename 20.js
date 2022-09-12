/**
 * 
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。

示例 1:

输入: "()"
输出: true
 * @param {string} s
 * @return {boolean}
 */
// var isValid = function(s) {
//     let len = s.length;
//     if(len == 0) return true;
//     let obj = {
//         ')' : '(',
//         '}' : '{',
//         ']' : '['
//     }
//     let arr = [s[0]];
//     for(let i = 1; i < len; i++){
//         if (obj[s[i]] && obj[s[i]] == arr.slice(-1)[0]){
//             arr.pop();
//         } else {
//             arr.push(s[i]);
//         } 
//     }
//     // console.log(arr)
//     return arr.length == 0;
// };
var isValid = function(s) {
    let map = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    let stack = [];
    for(let i = 0; i < s.length; i++){
        if (map[s[i]] && map[s[i]] === stack.slice(-1)[0]) {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }
    return stack.length === 0;
};
console.log(isValid('()'))