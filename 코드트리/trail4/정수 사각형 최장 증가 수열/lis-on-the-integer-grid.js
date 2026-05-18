const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.
const pos = [];
grid.map((row, i) => row.map((col, j) => pos.push([col, i, j]))); // [값, y축, x축];
pos.sort((a, b) => a[0] - b[0]);

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];
const dp = Array.from(Array(n), () => Array(n).fill(1));

for (const [v, i, j] of pos) {
    for (let d = 0; d < 4; d++) {
        const ni = i + dy[d];
        const nj = j + dx[d];
        
        if (!inRange(ni, nj) || v >= grid[ni][nj]) continue;
        dp[ni][nj] = Math.max(dp[ni][nj], dp[i][j] + 1);
    }
}

let maxCount = 0;
dp.forEach((v) => maxCount = Math.max(...v, maxCount));
console.log(maxCount);

function inRange(i, j) {
    return 0 <= i && i < n && 0 <= j && j < n;
}