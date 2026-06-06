const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const sequence = input[1].split(' ').map(Number); // 0-index
// Please Write your code here.

// prefix[i] = 1번 원소부터 i번 원소까지의 누적합
// sequence는 0-index이므로, i번 원소는 sequence[i - 1]
const prefix = Array(n + 1).fill(0); // 1-index
for (let i = 1; i <= n; i++) {
    prefix[i] = prefix[i - 1] + sequence[i - 1];
}

// dp[i][j] = 1번부터 i번 숫자까지 고려했을 때, 서로 겹치지 않고 붙어있지도 않게 j개의 구간을 골라 얻을 수 있는 최대 합
const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(-Infinity));
dp[0][0] = 0; // 아무 숫자도 보지 않고, 구간도 0개 고르면 합은 0

for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= m; j++) {
        // Case 1.
        // i번째 숫자를 어떤 구간에도 포함시키지 않는 경우
        // 이 때 i-1번째 숫자까지 봤을 때 최댓값 그대로 가져가기
        dp[i][j] = Math.max(dp[i][j], dp[i - 1][j]);

        // Case 2.
        // i번째 숫자를 마지막 구간의 끝으로 사용할 경우
        // 이 때 구간을 새로 만들기 때문에 j는 1 이상임
        if (j > 0) {
            for (let k = 1; k <= i; k++) {
                const sectionSum = prefix[i] - prefix[k - 1];

                if (k === 1 && j === 1) {
                    dp[i][j] = Math.max(dp[i][j], sectionSum);
                }
                if (k > 1 && dp[k - 2][j - 1] !== -Infinity) {
                    dp[i][j] = Math.max(dp[i][j], dp[k - 2][j - 1] + sectionSum);
                }
            }
        }
    }
}

console.log(dp[n][m]);