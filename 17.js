/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let result = [];
    if(digits.length !== 0) {
        backtrack('', digits, result);
    }
    return result;
};
const num_letter = ['','','abc','def','ghi','jkl','mno','pqrs','tuv','wxyz'];
var backtrack = function(container, digits, result) {
    if(digits.length == 0){
        result.push(container)
    } else {
        let digit = digits.substring(0,1);
        let letters = num_letter[digit];
        console.log(digit, letters)
        for(let i = 0; i < letters.length; i++){
            let letter = letters.substring(i, i+1);
            backtrack(container + letter, digits.substring(1), result);
        }
    }
}
console.log(letterCombinations('23'));