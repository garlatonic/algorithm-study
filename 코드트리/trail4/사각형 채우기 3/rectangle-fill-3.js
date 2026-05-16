const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

// Please Write your code here.
const dp = Array(n + 1).fill(0);
const sum = Array(n + 1).fill(0);

dp[0] = 1;
dp[1] = 2;
dp[2] = 7;

sum[0] = 1;
sum[1] = sum[0] + dp[1];
sum[2] = sum[1] + dp[2];

for (let i = 3; i < n + 1; i++) {
    dp[i] = (3 * dp[i - 2] + 2 * dp[i - 1] + 2 * sum[i - 3]) % 1000000007;
    sum[i] = (sum[i - 1] + dp[i]) % 1000000007;
}

console.log(dp[n]);