const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);

// Please Write your code here.
const total = arr.reduce((a, b) => a + b);

const dp = Array(total + 1).fill(false);
dp[0] = true;

for (const num of arr) {
    for (let s = total; s >= num; s--) {
        if (dp[s - num]) dp[s] = true;
    }
}

let answer = Infinity;
for (let sumA = 1; sumA < total; sumA++) {
    if (dp[sumA]) {
        const sumB = total - sumA;
        answer = Math.min(answer, Math.abs(sumA - sumB));
    }
}

console.log(answer);