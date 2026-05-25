const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const coin = input[1].split(' ').map(Number);

// Please write your code here.
const dp = Array(m + 1).fill(-Infinity);
dp[0] = 0;

// dp테이블의 각 인덱스는 금액, 원소는 동전의 갯수
for (let i = 1; i <= m; i++) {
    for (let j = 0; j < n; j++) {
        if (i < coin[j]) continue;
        if (dp[i - coin[j]] === -Infinity) continue;
        dp[i] = Math.max(dp[i], dp[i - coin[j]] + 1);
    }
}

console.log(dp[m] === -Infinity ? -1 : dp[m]);