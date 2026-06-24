const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const treasure = input.slice(1).map(line => line.split(' ').map(Number));

// Please Write your code here.
// i층까지 도달했을 때 j번 방을 들어갈 경우 보물 최대 갯수
const dp = Array.from({ length: n }, () => Array(m).fill(-Infinity));
for (let j = 0; j < m; j++) {
    dp[0][j] = treasure[0][j];
}

for (let i = 1; i < n; i++) {
    for (let j = 0; j < m; j++) {
        for (let k = 0; k < m; k++) {
            if (j === k) continue;
            if (dp[i - 1][k] === -Infinity) continue;

            dp[i][j] = Math.max(dp[i][j], dp[i - 1][k] + treasure[i][j]);
        }
    }
}

console.log(Math.max(...dp[n - 1]));