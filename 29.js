function divide(dividend, divisor) {
    let result = 0;
    let addFu = true;
    if ((dividend < 0 && divisor < 0 )||(dividend > 0 && divisor > 0)) {
        addFu = false;
        
    }
    divisor = Math.abs(divisor);
    dividend = Math.abs(dividend);
    let otherNum = dividend;
    while(otherNum > divisor) {
        otherNum -= divisor;
        result++;
    }
    return addFu ? 0 - result : result;
};

// console.log(divide(10, 3))
console.log(divide(7, -3))