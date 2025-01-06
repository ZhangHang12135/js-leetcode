// https://leetcode.cn/problems/delete-and-earn/description/?envType=study-plan-v2&envId=dynamic-programming
function deleteAndEarn(nums) {
    let arr = [];
    nums.forEach(x => {
        if (arr[x]) {
            arr[x] += x;
        } else {
            arr[x] = x;
        }
    });
    let dp = [];
    let n = arr.length;
    let fn1 = arr[0] || 0, fn2 = Math.max(arr[0] || 0, arr[1] || 0);
    let i = 2;
    while (i < n) {
        let temp = fn2;
        console.log(arr[i], fn1 + (arr[i] || 0), fn2);
        fn2 = Math.max(fn1 + (arr[i] || 0), fn2);
        fn1 = temp;
        i++;
    }
    return fn2;
};

deleteAndEarn([2,3,4]);