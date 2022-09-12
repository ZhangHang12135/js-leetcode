var maxProfit = function(prices) {
    let max= 0;
    let min = Infinity;
    for(let i = 0; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        max = Math.max(prices[i] - min, max);
    }
    return max;
};
maxProfit([1,2]);