const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const coin = [0].concat(input[1].split(' ').map(Number));

// Please Write your code here.
// dp[i][j] = 계단 1칸 오르기 j번 이행하고 i번째 계단에 도달했을 때 최대 동전의 합
const dp = Array.from({ length: n + 1 }, () => Array(4).fill(-Infinity));
dp[0][0] = 0;

for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= 3; j++) {
        if (dp[i][j] === -Infinity) continue;

        if (i + 1 <= n && j + 1 <= 3) {
            dp[i + 1][j + 1] = Math.max(dp[i + 1][j + 1], dp[i][j] + coin[i + 1]);
        }
        if (i + 2 <= n) {
            dp[i + 2][j] = Math.max(dp[i + 2][j], dp[i][j] + coin[i + 2]);
        }
    }
}

console.log(Math.max(...dp[n]));