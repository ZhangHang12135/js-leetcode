/**
 * 编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

示例 1:

输入: ["flower","flow","flight"]
输出: "fl"
示例 2:

输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。

 */
var longestCommonPrefix = function(strs) {
    let len = strs.length;
    let common = '';
    if(len === 1) common = strs[0];
    else{
        console.log(commonStr(strs[0], strs[1]));
        common = commonStr(strs[0], strs[1]);
        
        for(let i = 2; i < len; i++){
            common = commonStr(common, strs[i])
        }
    }
    return common;
};
function commonStr(str1, str2){
    let len = str1.length;
    let com = '';
    for(let i = 0; i < len; i++){
        if(str1[i] == str2[i]) com +=str1[i]
        else return com;
    }
    return com;
}
longestCommonPrefix(["dog","racecar","car"])