const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please write your code here.
const MOD = 10007;
const dp = Array(n + 1).fill(-Infinity);
dp[0] = 1;

for (let i = 1; i <= n; i++) {
    let count = 0;
    for (const num of [1, 2, 5]) {
        if (i - num < 0) continue;
        if (dp[i - num] === -Infinity) continue;
        count = (count + dp[i - num]) % MOD;
    }
    dp[i] = count;
}

console.log(dp[n]);