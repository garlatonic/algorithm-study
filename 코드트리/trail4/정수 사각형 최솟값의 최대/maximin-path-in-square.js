const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const matrix = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please Write your code here.
const dp = Array.from(Array(n), () => Array(n).fill(0));
dp[0][0] = matrix[0][0];
for (let j = 1; j < n; j++) {
    dp[0][j] = Math.min(dp[0][j - 1], matrix[0][j]);
}
for (let i = 1; i < n; i++) {
    dp[i][0] = Math.min(dp[i - 1][0], matrix[i][0]);
}

for (let i = 1; i < n; i++) {
    for (let j = 1; j < n; j++) {
        // 왼쪽에서 접근할 때
        const rl = Math.min(dp[i][j - 1], matrix[i][j]);
        // 위에서 접근할 때
        const tb = Math.min(dp[i - 1][j], matrix[i][j]);

        // 두가지 경로에서 최대
        dp[i][j] = Math.max(rl, tb);
    }
}

console.log(dp[n - 1][n - 1]);