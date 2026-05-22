const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const segments = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.
segments.sort((a, b) => a[1] - b[1] || a[0] - b[0]);
const dp = Array(n).fill(1);

for (let i = 1; i < n; i++) {
  for (let j = 0; j < i; j++) {
    if (segments[j][1] < segments[i][0]) dp[i] = Math.max(dp[i], dp[j] + 1);
  }
}

console.log(Math.max(...dp));