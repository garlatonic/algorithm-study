const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const a = input[1].split(' ').map(Number);
const b = input[2].split(' ').map(Number);

// Please write your code here.
// dp[i][j] = i장까지 소비되었고, 그중 남우가 j장 썼을 때 남우의 최대 점수
const dp = Array.from(Array(2 * n + 1), () => Array(n + 1).fill(-Infinity));
dp[0][0] = 0;

for (let i = 0; i <= 2 * n; i++) {
    for (let j = 0; j <= n; j++) {
        if (dp[i][j] === -Infinity) continue; // 도달 불가능한 상태면 무시
        if (j >= n) continue; // 남우 카드가 모두 소진 되었을 시
        if (0 > i - j || i - j >= n) continue; // 상대 카드가 범위를 벗어날 시

        // Case 1: 카드대결 - 남우 카드가 더 작을 때
        if (b[j] < a[i - j] && i + 1 <= 2 * n) {
            dp[i + 1][j + 1] = Math.max(dp[i + 1][j + 1], dp[i][j] + b[j]);
        }

        // Case 2: 카드대결 - 남우 카드가 더 클 때
        if (b[j] > a[i - j] && i + 1 <= 2 * n) {
            dp[i + 1][j] = Math.max(dp[i + 1][j], dp[i][j]);
        }

        // Case 3: 카드대결 - 두 카드가 같을 때
        if (b[j] === a[i - j] && i + 2 <= 2 * n) {
            dp[i + 2][j + 1] = Math.max(dp[i + 2][j + 1], dp[i][j]);
        }

        // Case 4: 카드 버리기
        if (i + 2 <= 2 * n) {
            dp[i + 2][j + 1] = Math.max(dp[i + 2][j + 1], dp[i][j]);
        }
    }
}

// 상대 카드가 비워지거나, 남우 카드가 비워졌을 때
let answer = 0;
for (let i = 0; i <= 2 * n; i++) {
    for (let j = 0; j <= n; j++) {
        if (j === n || i - j === n) answer = Math.max(answer, dp[i][j]);
    }
}

console.log(answer);