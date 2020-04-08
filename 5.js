/**
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

示例 1：

输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
示例 2：

输入: "cbbd"
输出: "bb"
 */
// 备忘录算法 暴力法小改
let strmap = new Map();
var longestPalindrome1 = function(s) {
    let n = s.length;
    if(n == 1 || palindrome(s)){
        return s;
    }
    if(strmap.get(s)) return strmap.get(s);
    else {
        let s1 = longestPalindrome1(s.slice(0,-1));
        let s2 = longestPalindrome1(s.slice(1));
        strmap.set(s, s1.length > s2.length ? s1 : s2);
        return strmap.get(s);
    }
};
function palindrome(s){
    let n = s.length;
    let i = 0;
    while(i < n){
        if(s[i] === s[n-1]){
            i++;
            n--;
        }else{
            return false;
        }
    }
    return true;  
}
// 动态规划
let longestPalindrome2 = function (s){
    let p = new Map();
    let n = s.length;
    let maxL = 1, maxi = 0;
    for(let i = 0; i < n; i++){
        // 自身是回文，单个字符的时候
        p.set(`${i}-${i}`, true);
        // 两个相等的在一起的时候也是回文
        if(i < n-1 && s.charAt(i) == s.charAt(i+1)){
            p.set(`${i}-${i+1}`, true);
            maxL = 2;
            maxi = i;
        }
    }
    // L代表字串长度，从3个的小串开始，因为一个，和两个的上面已经处理了
    for(let L = 3; L <= n; L++){
        // 起始字串点
        for(let i = 0; i < n; i++){
            let j = i + L - 1; // 字串结束点
            p.set(`${i}-${j}`, s.charAt(i) === s.charAt(j) && p.get(`${i+1}-${j-1}`))
            if(p.get(`${i}-${j}`) && L >= maxL){
                maxi = i;
                maxL = L;
            }
        }
    }
    console.log(maxL, maxi)
    return s.slice(maxi,maxi+maxL);
}
console.time();
console.log(longestPalindrome2("anugnxshgonmqydttcvmtsoaprxnhpmpovdolbidqiyqubirkvhwppcdyeouvgedccipsvnobrccbndzjdbgxkzdbcjsjjovnhpnbkurxqfupiprpbiwqdnwaqvjbqoaqzkqgdxkfczdkznqxvupdmnyiidqpnbvgjraszbvvztpapxmomnghfaywkzlrupvjpcvascgvstqmvuveiiixjmdofdwyvhgkydrnfuojhzulhobyhtsxmcovwmamjwljioevhafdlpjpmqstguqhrhvsdvinphejfbdvrvabthpyyphyqharjvzriosrdnwmaxtgriivdqlmugtagvsoylqfwhjpmjxcysfujdvcqovxabjdbvyvembfpahvyoybdhweikcgnzrdqlzusgoobysfmlzifwjzlazuepimhbgkrfimmemhayxeqxynewcnynmgyjcwrpqnayvxoebgyjusppfpsfeonfwnbsdonucaipoafavmlrrlplnnbsaghbawooabsjndqnvruuwvllpvvhuepmqtprgktnwxmflmmbifbbsfthbeafseqrgwnwjxkkcqgbucwusjdipxuekanzwimuizqynaxrvicyzjhulqjshtsqswehnozehmbsdmacciflcgsrlyhjukpvosptmsjfteoimtewkrivdllqiotvtrubgkfcacvgqzxjmhmmqlikrtfrurltgtcreafcgisjpvasiwmhcofqkcteudgjoqqmtucnwcocsoiqtfuoazxdayricnmwcg"));
// console.log(longestPalindrome2(""))
console.timeEnd();