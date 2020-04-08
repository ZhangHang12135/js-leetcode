/**
 * 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。

注意：答案中不可以包含重复的三元组。

例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

满足要求的三元组集合为：
[
  [-1, 0, 1],
  [-1, -1, 2]
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/3sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var threeSum = function(nums) {
    let num1 = nums.filter((x)=>(x<0));
    let num2 = nums.filter((x)=>(x>=0));
    let result = [];
    for(let i = 0, len1 = num1.length; i < len1; i++){
        for(let j = 0, len2 = num2.length; j < len2; j++){
            let temp = num1[i] + num2[j];
            if(temp >= 0 && num1.indexOf(-(temp) !== -1)){
                result.push([num1[i], -temp, num2[j]]);
            }
            if(temp < 0 && num2.indexOf(-temp) !== -1){
                result.push([num1[i], -temp, num2[j]]);

            }
        }
    }
    return result;
};
console.log(threeSum([-1, 0, 1, 2, -1, -4]));