const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const a = input[1].split(' ').map(Number);
// Please Write your code here.

// dp[i][j] = 선택한 i개의 숫자 중 k개가 음수일 때 연속합의 최댓값
const dp = Array.from(Array(n + 1), () => Array(k + 1).fill(-Infinity));

for (let i = 0; i < n; i++) {
    for (let j = 0; j <= k; j++) {
        // Case1: 현재 인덱스가 음수일 때
        if (a[i] < 0 && j + 1 <= k) {
            dp[i + 1][j + 1] = Math.max(dp[i + 1][j + 1], dp[i][j] + a[i], a[i]);
        }

        // Case2: 현재 인덱스가 양수일 때
        if (a[i] >= 0) {
            dp[i + 1][j] = Math.max(dp[i + 1][j], dp[i][j] + a[i], a[i]);
        }
    }
}

let answer = -Infinity;
for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= k; j++) {
        answer = Math.max(answer, dp[i][j]);
    }
}
console.log(answer);