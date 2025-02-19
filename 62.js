var uniquePaths = function(m, n) {
    let dp = new Array(m);
    for(let i = 0; i < m; i++){
        dp[i] = []
        for(let j = 0; j < n; j++) {
            if (i === 0 || j === 0) {
                dp[i][j] = 1;
            } else { 
                dp[i][j] = dp[i-1][j] + dp[i][j-1];
            }
        }
    }
    return dp[m-1][n-1];
};
console.log(uniquePaths(3,7));