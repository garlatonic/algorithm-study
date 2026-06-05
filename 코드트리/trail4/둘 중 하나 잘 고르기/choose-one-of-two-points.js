const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const cardPairs = [];
for (let i = 1; i < input.length; i++) {
    cardPairs.push(input[i].split(' ').map(Number));
}
// Please write your code here.
// dp[i][j] = 총 i번에서 j번 빨간색 카드를 골랐을 때 뽑힌 숫자들의 최대 합
const dp = Array.from({ length: 2 * n + 1 }, () => Array(n + 1).fill(-Infinity));
dp[0][0] = 0;

for (let i = 0; i < 2 * n; i++) {
    for (let j = 0; j <= n; j++) {
        if (dp[i][j] === -Infinity) continue;

        // Case1: 빨간색 카드를 고름
        if (j + 1 <= n) {
            dp[i + 1][j + 1] = Math.max(dp[i + 1][j + 1], dp[i][j] + cardPairs[i][0]);
        }

        // Case2: 파란색 카드를 고름
        dp[i + 1][j] = Math.max(dp[i + 1][j], dp[i][j] + cardPairs[i][1]);
    }
}

console.log(dp[2 * n][n])