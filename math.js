// let [n, k] = [5, 3];
// let drinks = ['1','2', '3', '1', '2'];
// let drinksObj = {};
// drinks.forEach((drink)=>{
//     if(!drinksObj[drink]){
//         drinksObj[drink] = 1;
//     }else{
//         drinksObj[drink]++;
//     }
// })
// let result = 0;
// for(let key in drinksObj){
//     if(drinksObj[key] % 2 === 0){
//         result += drinksObj[key] / 2;
//     }else{
//         result +=  Math.floor(drinksObj[key] / 2) + 1;
//     }
// }
// console.log(result)
// let [n, m] = [20, 4]
// let nums = ['8', '7', '4', '3'];
// let numObj = {'1':2, '2':5, '3':5, '4':4, '5':5, '6':6, '7':3 ,'8':7,'9':6}
// let result = 0;
// for(let i = 0; i < m-1; i++){
//     let temp = parseInt(n / numObj[nums[i]]);
//     let result_now = stringSum(nums[i], temp);
//     let k = n % numObj[nums[i]];
//     for(j = i + 1; j < m; j++){
//         temp = parseInt(k / numObj[nums[j]]);
//         result_now += stringSum(nums[j], temp);
//         k = k % numObj[nums[j]]
//         if(j==1) console.log(temp, k);
//     }
//     console.log(result_now)
//     if(k == 0 && parseInt(result_now) > result){
//         result = result_now;
//     }
// }
// // console.log(result)
// function stringSum(str,num){
//     let sum = '';
//     while(num > 0){
//         sum +=str;
//         num--;
//     }
//     return sum;
// }
// let n = 5;
// let result = [0, 1];
// for(let i = 2; i < n; i++){
//    result[i] = result[i-1] + result[i-2];
// }
// console.log(result[n-1]);
// let n = 2;
// nums1 = [1,2];
// nums2 = [2,3];
// console.log(nums1.reduce((sum,x)=>sum+x));
// function maxChild(nums){
//    let len = nums.length;
//    if(len < 2) return len;
//    let i = 0, j = 1;
//    let result = 0;
//    while(j < len){
//        if(nums[j] < nums[j-1]){
//           i = j;
//        }
//        j++;
//        result = (j - i) > result ? (j-i) : result;
//    }
//    return result;
// }
// let nums = [1,1,1,1,1]
// let result = 1
// for(let i = 0; i < 5; i++){
//    let nums_copy = nums.slice();
//    nums_copy.splice(i,1)
//    let temp = maxChild(nums_copy);
//    // console.log(temp)
//    if(temp > result) result = temp;
// }
// function changeStr(str, start, end){
//    let head = str.substring(0, start-1);
//    let tail = str.substring(end);
//    let mid = '';
//    for(let i = start - 1; i < end; i++){
//       let temp = str[i] == '0'? '1' : '0';
//       mid += temp;
//    }
//    return head+mid+tail;
// }
// console.log(changeStr('00110', 1, 5))

// let n = 45;
// let result = 0;
// for(let r = 1; r <= n; r++){
//     for(let c = 1; c <= n; c++){
//       let temp = r * c;
//       if(n % temp !== 0) continue;
//       let l = n/(r*c);
//       if(result < last(r,c,l)){
//             result = last(r,c,l);
//             console.log(r,c,l);
//       }
//     }
// }
// function last(r,c,l){
//    return (r+2)*(c+1)*(l+2)-r*c*l;
// }
// console.log(result)
// let n = 6;
// let arr = '1 1 0 1 2 1'.split(' ').join('').split('0');
// function sum(i){
//    let sum = 0;
//    while(i > 0){
//        sum +=i;
//        i--;
//    }
//    return sum;
// }
// let result = 0;
// for(let item of arr){
//    if(!item.includes('2')){
//       result += sum(item.length);
//    }else{
//        let a = parseInt(sum(item.length)/2);
//        let itemArr = item.split('2');
//        let b = 0;
//        itemArr.forEach(x=>{
//            b += sum(x.length);
//        })
//        result += a + parseInt(b/2);
//    }
   
// }
// console.log(result)
// let arr = '3,4,8,5,2,6,7,1,9'.split(',').map(x=>parseInt(x));
// let s1 = arr.slice(0,4);
// let s2 = arr.slice(3,7);
// let s3 = arr.slice(6);
// s3.push(arr[0]);
// console.log(s1, s2,s3)
// let num1 = s1.reduce((sum,x)=>sum+x),
//     num2 = s2.reduce((sum,x)=>sum+x),
//     num3 = s3.reduce((sum,x)=>sum+x);
// console.log(num1, num2, num3)
let strArr = 'My name is x'.split(' ');
let newStr = strArr.map(item => {
    if(item.length >=2){
        let arr = item.split('');
        arr[1] = arr[1].toLocaleUpperCase();
        item = arr.join('');
        
    }
    return item;
})
let result = newStr.join(' ');
console.log(strArr, newStr, result)