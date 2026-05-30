const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.
const total = arr.reduce((a, b) => a + b, 0);
const dp = Array.from(Array(n + 1), () => Array(2 * total + 1).fill(-Infinity));
dp[0][total] = 0;

for (let i = 1; i <= n; i++) {
    const num = arr[i - 1]; // 현재 선택한 인덱스

    for (let j = 0; j <= 2 * total; j++) {
        if (dp[i - 1][j] === -Infinity) continue;

        // Case 1: A에 num → diff +num, A합 +num
        if (j + num <= 2 * total)
            dp[i][j + num] = Math.max(dp[i][j + num], dp[i - 1][j] + num);

        // Case 2: B에 num → diff -num, A합 그대로
        if (j - num >= 0)
            dp[i][j - num] = Math.max(dp[i][j - num], dp[i - 1][j]);

        // Case 3: C에 num → 그대로
        dp[i][j] = Math.max(dp[i][j], dp[i - 1][j]);
    }
}

console.log(dp[n][total]);