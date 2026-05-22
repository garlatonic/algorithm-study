const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, n + 1).map(row => row.split(' ').map(Number));

// Please Write your code here.
const dp = Array.from(Array(n), () => Array(m).fill(-Infinity));
dp[0][0] = 1;

for (let r = 1; r < n; r++) {
  for (let y = 0; y < r; y++) {
    for (let c = 1; c < m; c++) {
      for (let x = 0; x < c; x++) {
        if (dp[y][x] < 0) continue;
        if (grid[y][x] < grid[r][c]) {
          dp[r][c] = Math.max(dp[r][c], dp[y][x] + 1);
        }
      }
    }
  }
}

let max = 0;
for (let r = 0; r < n; r++) {
  max = Math.max(max, ...dp[r]);
}
console.log(max);