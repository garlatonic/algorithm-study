const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const jobs = [];
for (let i = 1; i <= n; i++) {
  jobs.push(input[i].split(' ').map(Number));
}
// Please Write your code here.
jobs.sort((a, b) => a[1] - b[1] || a[0] - b[0]);

const dp = Array(n).fill(0);
for (let i = 0; i < n; i++) {
  dp[i] = jobs[i][2];
}

for (let i = 1; i < n; i++) {
  for (let j = 0; j < i; j++) {
    if (jobs[j][1] < jobs[i][0]) {
      dp[i] = Math.max(dp[i], dp[j] + jobs[i][2]);
    }
  }
}

console.log(Math.max(...dp));