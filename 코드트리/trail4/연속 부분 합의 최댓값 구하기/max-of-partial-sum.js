const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);

// Please Write your code here.
const dp = Array(n + 1).fill(-Infinity);
dp[1] = arr[0];

for (let i = 2; i <= n; i++) {
    dp[i] = Math.max(dp[i - 1] + arr[i - 1], arr[i - 1]);
}

console.log(Math.max(...dp));