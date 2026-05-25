const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const jewels = input.slice(1).map(line => line.split(' ').map(Number));

// Please Write your code here.
const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(-Infinity));
dp[0][0] = 0;

for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= m; j++) {
        // Case 1: i번째 보석을 고르지 않음
        if (dp[i - 1][j] !== -Infinity) {
            dp[i][j] = Math.max(dp[i][j], dp[i - 1][j]);
        }

        // Case 2: i번째 보석을 고름
        const [w, v] = jewels[i - 1];
        if (j - w >= 0 && dp[i - 1][j - w] !== -Infinity) {
            dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - w] + v);
        }
    }
}

console.log(Math.max(...dp.flat()))