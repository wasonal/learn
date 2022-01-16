function cuttingRope(n: number): number {
    if (n < 2) { return 0; }
    else if (n === 2) { return 1; }
    else if (n === 3) { return 2; }

    const dp = [];
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 3;

    for (let i = 4; i <= n; i++) {
        let max = 0;
        
        for (let j = 1; j <= i / 2; j++) {
            const temp = dp[j] * dp[i - j];
            if (max < temp) {
                max = temp;
            }

            dp[i] = max;
        }
    }

    return dp[n];
};

console.log(cuttingRope(10));