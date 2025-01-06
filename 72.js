var minDistance = function(word1, word2) {
    let m = word1.length, n = word2.length;
    let dp = [];
    if (m * n === 0) {
        return m + n;
    }
    for(let i = 0; i < m + 1; i++) {
        dp[i] = [i];    
    }
    for(let j = 0; j < n + 1; j++) {
        dp[0][j] = j;    
    }
    for(let i = 1; i < m+1; i++){
        for(let j = 1; j < n+1; j++) {
            let left = dp[i][j-1] + 1;
            let top = dp[i-1][j] + 1;
            let left_top = dp[i-1][j-1];
            if (word1[i-1] !== word2[j-1]) {
                left_top += 1;
            }
            dp[i][j] = Math.min(left, Math.min(top, left_top));
        }
    }
    return dp[m][n];
};
minDistance('horse', 'ros');