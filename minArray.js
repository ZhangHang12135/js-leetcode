// https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof/

var minArray = function(numbers) {
    let result = null;
    for(let i = 0; i < numbers.length - 1; i++) {
        console.log(numbers[i], numbers[i + 1]);
        if (numbers[i] > numbers[i + 1]) {
            result = numbers[i + 1];
        }
    }
    return result || numbers[0];
};

console.log(minArray([2,2,2,0,1]));