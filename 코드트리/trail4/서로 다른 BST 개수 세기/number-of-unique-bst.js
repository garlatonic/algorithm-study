const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

// Please Write your code here.
const dp = Array(n + 1).fill(0);
dp[0] = 1;
dp[1] = 1;
dp[2] = 2;
dp[3] = 5;

for (let i = 4; i < n + 1; i++) {
    // 루트가 k
    for (let k = 1; k <= i; k++) {
        // 왼쪽 노드로 들어가는 노드 갯수 k - 1
        // 오른쪽 노드로 들어가는 노드 갯수 i - k
        dp[i] += dp[k - 1] * dp[i - k];
    }
}

console.log(dp[n]);