const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const quests = input.slice(1).map(line => line.split(' ').map(Number));

// Please Write your code here.
const maxExp = quests.reduce((a, b) => a + b[0], 0);
const dp = Array(maxExp + 1).fill(Infinity);
dp[0] = 0;

for (let j = 0; j < n; j++) {
    for (let i = maxExp; i >= 1; i--) {
        if (i < quests[j][0] || dp[i - quests[j][0]] === Infinity) continue;
        dp[i] = Math.min(dp[i], dp[i - quests[j][0]] + quests[j][1]);
    }
}

let minTime = Infinity;
for (let i = m; i <= maxExp; i++) {
    if (dp[i] < minTime) minTime = dp[i];
}

console.log(minTime === Infinity ? -1 : minTime);