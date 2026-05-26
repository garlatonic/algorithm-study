const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const profit = input[1].split(' ').map(Number);

// Please Write your code here.
const dp = Array(n + 1).fill(-Infinity);
dp[0] = 0;
for (let i = 1; i <= n; i++) {
    dp[i] = profit[i - 1];
}

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        // i는 막대 길이
        // j는 쪼개는 막대 길이
        if (i < j) continue;
        if (dp[i - j] === -Infinity) continue;

        dp[i] = Math.max(dp[i], dp[i - j] + profit[j - 1]);
    }
}

console.log(Math.max(...dp));