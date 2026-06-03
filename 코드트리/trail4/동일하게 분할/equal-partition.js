const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);
// Please Write your code here.
const total = arr.reduce((acc, cur) => acc + cur, 0);
if (total % 2 !== 0) {
    console.log("No");
    process.exit(0);
}

const target = total / 2;
const dp = Array(target + 1).fill(false); // dp[i] = A 숫자 합 i를 만들수 있느냐 없느냐
dp[0] = true;

for (let i = 0; i < n; i++) {
    const x = arr[i];

    for (let j = target; j >= 1; j--) {
        if (dp[j - x]) dp[j] = true;
    }
}

console.log(dp[target] ? "Yes" : "No");