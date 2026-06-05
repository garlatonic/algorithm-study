const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const a = input[1].trim().split(' ').map(Number);

// Please Write your code here.
const dp = Array.from({ length: 41 }, () => Array(n).fill(0n));
// 초기값 작업: 더하거나, 빼거나
if (inRange(a[0])) dp[20 + a[0]][0] += 1n;
if (inRange(-a[0])) dp[20 - a[0]][0] += 1n;

// 두번째 숫자부터 시작
for (let i = 1; i < n; i++) {
    for (let s = -20; s <= 20; s++) {
        if (dp[s + 20][i - 1] === 0n) continue; // 아직 도달하지 못한 합이라면 지나가기

        // 더하기
        const plus = s + a[i];
        if (inRange(plus)) dp[plus + 20][i] += dp[s + 20][i - 1];

        // 빼기
        const minus = s - a[i];
        if (inRange(minus)) dp[minus + 20][i] += dp[s + 20][i - 1];
    }
}

console.log(dp[20 + m][n - 1].toString());

function inRange(sum) {
    return -20 <= sum && sum <= 20;
}