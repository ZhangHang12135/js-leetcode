/**
 * 
 * 将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。

比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：

L   C   I   R
E T O E S I I G
E   D   H   N
之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："LCIRETOESIIGEDHN"。

请你实现这个将字符串进行指定行数变换的函数：

string convert(string s, int numRows);
示例 1:

输入: s = "LEETCODEISHIRING", numRows = 3
输出: "LCIRETOESIIGEDHN"
示例 2:

输入: s = "LEETCODEISHIRING", numRows = 4
输出: "LDREOEIIECIHNTSG"
解释:

L     D     R
E   O E   I I
E C   I H   N
T     S     G
 
 */
// var convert = function(s, numRows) {
//     if(numRows == 1) return s;
//     let arr = [];
//     let n = numRows;
//     while(numRows > 0){
//         arr[numRows-1] = [];
//         numRows--;
//     }
//     let len = s.length;
//     let i = 0;
//     let j = 0;
//     let tag = 1;
//     for(let k = 0; k < len; k++){
//         arr[i][j] = s[k];
//         i += tag; 
//         if(i == n){
//             tag = -1; 
//             i -=2;
//         }
//         if(i == -1) {
//             tag = 1; 
//             i +=2;
//         }
//         if(tag == -1) j++;
//     }
//     console.log(arr);
//     return leftToRight(arr)
// };
// function leftToRight(arr){
//     let result = '';
//     let n = arr.length;
//     for(let i = 0; i < n; i++){
//         let m = arr[i].length;
//         let j = 0;
//         while(j < m){
//             if(arr[i][j]) result += arr[i][j];
//             j++;
//         }

//     }
//     return result;
// }
// console.log(convert("ABCD",3));
var convert = function(s, numRows) {
    let n = s.length, t = 2 * numRows - 2;
    if (numRows === 1 || numRows >= n) {
        return s;
    }
    let ans = [];
    for(let i = 0; i < numRows; i++) {
        for (let j = 0; j < n - i; j += t) {
            ans.push(s[i + j]);
            if (i > 0 && i < numRows - i && j + t - i < n) {
                ans.push(s[j + t - i]);
            }
        }
    }
    return ans.join('');
};
console.log(convert("PAYPALISHIRING",4));
