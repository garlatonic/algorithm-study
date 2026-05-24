const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please write your code here.
const MOD = 10007;
const dp = Array(n + 1).fill(0);
dp[0] = 1; // 아무 수열도 선택하지 않는 방법 1가지

for (let i = 1; i <= n; i++) {
    for (const num of [1, 2, 5]) {
        if (i - num < 0) continue; // 고른 숫자가 합 i보다 클 때에는 선택하지 않음
        dp[i] = (dp[i] + dp[i - num]) % MOD; // i - num를 만드는 방법에 num을 붙여 i를 만드는 경우
    }
}

console.log(dp[n]);