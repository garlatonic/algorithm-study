const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const N = Number(input[0]);
// Please Write your code here.
const MOD = 10 ** 9 + 7;

// dp[i][j] = 길이가 i이고 끝 문자가 j인 계단 수의 갯수
const dp = Array.from({ length: N }, () => Array(10).fill(0));
for (let i = 1; i <= 9; i++) {
    dp[0][i] = 1;
}

for (let i = 1; i < N; i++) {
    for (let j = 0; j <= 9; j++) {
        for (let k = 0; k <= 9; k++) {
            // 현재 숫자 j, 이전 숫자 k
            // 이전 숫자가 현재 숫자에서 ±1일 때만 적용
            if (j === k - 1 || j === k + 1) {
                dp[i][j] += dp[i - 1][k] % MOD;
            }
        }
    }
}

let answer = 0;
for (let j = 0; j <= 9; j++) {
    answer = (answer + dp[N - 1][j]) % MOD;
}

console.log(answer);