const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

// Please write your code here.
const MOD = 1_000_000_007;

// dp[i][t][b] = i일동안 T를 t번, B를 연속으로 b번 받은 평가 문자열 개수
const dp = Array.from({ length: n + 1 }, () =>
    Array.from({ length: 3 }, () =>
        Array(3).fill(0)));
dp[0][0][0] = 1; // 0일동안 아무것도 받지 못하는 개수 -> 1

for (let i = 0; i < n; i++) {
    for (let t = 0; t < 3; t++) {
        for (let b = 0; b < 3; b++) {
            // Case 1. G를 받을 경우 = 연속 b가 초기화됨
            dp[i + 1][t][0] = (dp[i + 1][t][0] + dp[i][t][b]) % MOD;

            // Case 2. B를 받을 경우
            if (b + 1 < 3)
                dp[i + 1][t][b + 1] = (dp[i + 1][t][b + 1] + dp[i][t][b]) % MOD;

            // Case 3. T를 받을 경우 = 연속 b가 초기화됨
            if (t + 1 < 3)
                dp[i + 1][t + 1][0] = (dp[i + 1][t + 1][0] + dp[i][t][b]) % MOD;
        }
    }
}

let answer = 0;
for (let t = 0; t < 3; t++) {
    for (let b = 0; b < 3; b++) {
        answer = (answer + dp[n][t][b]) % MOD;
    }
}

console.log(answer);