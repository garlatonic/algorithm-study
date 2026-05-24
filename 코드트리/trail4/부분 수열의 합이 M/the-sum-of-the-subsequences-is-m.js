const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);
// Please Write your code here.
const dp = Array(m + 1).fill(Infinity);
dp[0] = 0;

// i는 수열의 인덱스
// j는 부분 수열의 원소 합... dp[j]는 수열 길이
for (let i = 0; i < n; i++) {
    for (let j = m; j > 0; j--) {
        if (j - arr[i] < 0) continue; // 원소 합에서 수열 원소를 뺐을 때 0보다 작으면 안됨
        if (dp[j - arr[i]] === Infinity) continue;
        dp[j] = Math.min(dp[j], dp[j - arr[i]] + 1);
    }
}

console.log(dp[m] === Infinity ? -1 : dp[m]);