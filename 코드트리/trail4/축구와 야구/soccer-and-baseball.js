const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const scores = input.slice(1).map(line => line.split(' ').map(Number));

// Please Write your code here.
// dp[i][j][k] = 총 i명의 학생에서 j명을 축구팀, k명을 야구팀으로 뽑았을 때 최대 능력합
const dp = Array.from({ length: n + 1 }, () =>
  Array.from({ length: 12 }, () =>
    Array(10).fill(-Infinity)));

// 아무도 고르지 않았을 때
dp[0][0][0] = 0;

for (let i = 0; i < n; i++) {
  // 현재 학생
  const [s, b] = scores[i];

  for (let j = 0; j <= 11; j++) {
    for (let k = 0; k <= 9; k++) {
      if (dp[i][j][k] === -Infinity) continue;

      // Case 1. 안 뽑는다면?
      dp[i + 1][j][k] = Math.max(dp[i + 1][j][k], dp[i][j][k]);

      // Case 2. 축구팀으로 보낸다면?
      if (j + 1 <= 11) {
        dp[i + 1][j + 1][k] = Math.max(dp[i + 1][j + 1][k], dp[i][j][k] + s);
      }

      // Case 3. 야구팀으로 보낸다면?
      if (k + 1 <= 9) {
        dp[i + 1][j][k + 1] = Math.max(dp[i + 1][j][k + 1], dp[i][j][k] + b);
      }
    }
  }
}

console.log(dp[n][11][9]);