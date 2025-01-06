function coinChange(coins, amount) {
    let dp = new Array(amount).fill(amount + 1);
    dp[0] = 0;
    for(let i = 1; i < amount; i++) {
        for(let j = 0; j < coins.length; j++) {
            let coin = coins[j];
            if (i >= coin) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    return dp[amount] > amount ? - 1 : dp[amount];
};

coinChange([1,2,3], 6);