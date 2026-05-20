const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);

// Please Write your code here.
const dp = Array(n).fill(1);
for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
        if (arr[i] < arr[j]) dp[i] = Math.max(dp[i], dp[j] + 1);
    }
}

console.log(Math.max(...dp));