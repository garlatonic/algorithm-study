const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const coins = input[1].split(' ').map(Number);

// Please Write your code here.
const dp = Array(m + 1).fill(Infinity);
dp[0] = 0;

// i는 거슬러주는 금액
// dp[i]는 동전 갯수

for (let i = 1; i <= m; i++) {
    for (let j = 0; j < n; j++) {
        if (i < coins[j]) continue;
        if (dp[i - coins[j]] === Infinity) continue;
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
    }
}

console.log(dp[m] === Infinity ? -1 : dp[m]);