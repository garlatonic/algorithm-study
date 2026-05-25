const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.
const dp = Array(m + 1).fill(-Infinity);
dp[0] = 0;

for (let j = 0; j < n; j++) {
    for (let i = m; i > 0; i--) {
        if (i - arr[j] < 0) continue;
        if (dp[i - arr[j]] === -Infinity) continue;
        dp[i] = dp[i - arr[j]] + 1;
    }
}

console.log(dp[m] === -Infinity ? "No" : "Yes");