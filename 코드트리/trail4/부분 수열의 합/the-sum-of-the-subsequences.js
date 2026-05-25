const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.
const dp = Array.from(Array(n + 1), () => Array(m + 1).fill(false)); // i번째 원소까지 고려할 때 부분 수열의 합이 j가 될 수 있다
dp[0][0] = true; // 아무것도 고르지 않은 상태, 0인 상태는 항상 가능

for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= m; j++) {
        // Case 1: i번째 원소를 선택하여 합이 j가 된 경우
        if (j - arr[i] >= 0 && dp[i - 1][j - arr[i]]) { // i - 1번째까지 고려하여 고른 수의 합이 j - arr[i]
            dp[i][j] = true;
        }

        // Case 2: i번째 원소를 선택하지 않고 합이 j가 된 경우
        if (dp[i - 1][j]) {
            dp[i][j] = true;
        }
    }
}

// n개의 수까지 고려해봤을 때 정확히 합이 m이 되는지 판단
console.log(dp[n][m] ? "Yes" : "No");