const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const a = input[1];
const b = input[2];
// Please Write your code here.
// dp[i][j] = i번째 마법진까지 도달한 상태에서 현재까지 반시계방향으로 j번 돌렸을 때, 누적된 최소 회전수
const dp = Array.from({ length: n + 1 }, () => Array(10).fill(Infinity));
dp[0][0] = 0;

for (let i = 0; i < n; i++) {
    for (let j = 0; j < 10; j++) {
        if (dp[i][j] === Infinity) continue; // 접근 불가

        // 현재 문자는 이전에 반시계방향으로 j번 돌렸을 때
        const now = (Number(a[i]) + j) % 10;
        const target = Number(b[i]);

        // 반시계방향으로 돌릴 때 target까지 도달하기 위한 회전 수
        const left = (target - now + 10) % 10;
        // 시계방향으로 돌릴 때 target까지 도달하기 위한 회전 수
        const right = (now - target + 10) % 10;

        // Case 1: 시계방향으로 돌릴 경우 (뒤의 마법진 순서에 영향을 주지 않음)
        dp[i + 1][j] = Math.min(dp[i + 1][j], dp[i][j] + right);

        // Case 2: 반시계방향으로 돌릴 경우 (영향 줌)
        dp[i + 1][(j + left) % 10] = Math.min(dp[i + 1][(j + left) % 10], dp[i][j] + left)
    }
}

console.log(Math.min(...dp[n]));