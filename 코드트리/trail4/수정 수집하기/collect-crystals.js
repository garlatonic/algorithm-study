const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const str = input[1];
// Please write your code here.

// 현재 n번째까지 봤을 때, k번 이동하였고, 현재 방향이 d일 때, 얻을 수 있는 최대 수정의 개수
const dp = Array.from({ length: N + 1 }, () =>
    Array.from({ length: K + 1 }, () =>
        Array(2).fill(-Infinity)));

dp[0][0][0] = 0;

for (let n = 1; n <= N; n++) {
    for (let k = 0; k <= K; k++) {
        for (let d = 0; d < 2; d++) {
            // n: 현재 n번째
            // k: 방향을 바꾼 횟수
            // d: 현재 선택한 방향

            const cur = d === 0 ? "L" : "R";
            const gain = str[n - 1] === cur ? 1 : 0;

            // Case 1: 이전 방향이 현재 방향과 동일할 경우
            dp[n][k][d] = Math.max(dp[n][k][d], dp[n - 1][k][d] + gain);

            // Case 2: 이전 방향이 현재 방향과 다를 경우
            if (k > 0) {
                dp[n][k][d] = Math.max(dp[n][k][d], dp[n - 1][k - 1][1 - d] + gain);
            }
        }
    }
}

let answer = 0;
for (let k = 0; k <= K; k++) {
    answer = Math.max(answer, ...dp[N][k]);
}

console.log(answer);