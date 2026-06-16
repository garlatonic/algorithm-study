const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const sequence = input[1].split(" ").map(Number);

// Please Write your code here.
// 길이가 N인 수열, 비슷한 수열 만들기
// 비슷한 수열? 순서대로 읽었을 때 인접한 두 숫자가 다른 횟수 M번 이하

// dp[i][j] = 길이가 i인 수열에서 현재 숫자가 j(1, 2, 3, 4)일 때 인접한 두 숫자가 다른 횟수 m번일 때 유사도의 최대값
const dp = Array.from({ length: N + 1 }, () =>
  Array.from({ length: 5 }, () => Array(M + 1).fill(-Infinity)),
);

// 초기값 설정
for (let j = 1; j <= 4; j++) {
  dp[0][j][0] = 0; // 길이가 0인 수열은 존재하지 않음
  dp[1][j][0] = j === sequence[0] ? 1 : 0; // 길이가 1인 수열, 초기 숫자가 j인 경우
}

for (let i = 2; i <= N; i++) {
  for (let j = 1; j <= 4; j++) {
    for (let k = 1; k <= 4; k++) {
      for (let m = 0; m <= M; m++) {
        // 현재 숫자가 j, 이전 숫자가 k인 경우

        // Case 1: 인접한 숫자가 같을 때
        if (j === k) {
          // 기존의 수열과 같은 위치에 같은 숫자 j일 경우
          if (j === sequence[i - 1]) {
            dp[i][j][m] = Math.max(dp[i][j][m], dp[i - 1][k][m] + 1);
          } else {
            // 같은 숫자가 아니라면 유사도 증가 없음
            dp[i][j][m] = Math.max(dp[i][j][m], dp[i - 1][k][m]);
          }
        }

        // Case 2: 인접한 숫자가 다를 때
        if (j !== k) {
          // 기존의 수열과 같은 위치에 같은 숫자 j일 경우
          if (j === sequence[i - 1] && m > 0) {
            dp[i][j][m] = Math.max(dp[i][j][m], dp[i - 1][k][m - 1] + 1);
          } else if (j !== sequence[i - 1] && m > 0) {
            // 같은 숫자가 아니라면 다른 횟수 추가
            dp[i][j][m] = Math.max(dp[i][j][m], dp[i - 1][k][m - 1]);
          }
        }
      }
    }
  }
}

let answer = 0;
for (let j = 1; j <= 4; j++) {
  answer = Math.max(answer, ...dp[N][j]);
}

console.log(answer);
