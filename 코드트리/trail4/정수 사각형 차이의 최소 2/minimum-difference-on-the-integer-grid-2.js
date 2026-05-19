const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const grid = input.slice(1, n + 1).map((line) => line.split(" ").map(Number));

// Please Write your code here.
const dp = Array.from(Array(n), () => Array(n).fill(-1)); // 최댓값을 저장

// 최솟값 저장
const minsSet = new Set();
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        minsSet.add(grid[i][j]);
    }
}
const mins = [...minsSet].sort((a, b) => b - a); // 값 기준으로 내림차순 정렬
let diff = Infinity;

for (const min of mins) {
    // dp 초기화
    for (let i = 0; i < n; i++) dp[i].fill(-1);

    dp[0][0] = grid[0][0] >= min ? grid[0][0] : -1;
    for (let i = 1; i < n; i++) {
        if (grid[i][0] < min) break; // 최솟값보다 작은 경우 더 이상 진행할 필요 없음
        dp[i][0] = dp[i - 1][0] !== -1 ? Math.max(dp[i - 1][0], grid[i][0]) : -1;
    }
    for (let j = 1; j < n; j++) {
        if (grid[0][j] < min) break; // 최솟값보다 작은 경우 더 이상 진행할 필요 없음
        dp[0][j] = dp[0][j - 1] !== -1 ? Math.max(dp[0][j - 1], grid[0][j]) : -1;
    }

    for (let i = 1; i < n; i++) {
        for (let j = 1; j < n; j++) {
            if (grid[i][j] < min) continue; // 최솟값보다 작은 경우 무시

            if (dp[i - 1][j] !== -1 || dp[i][j - 1] !== -1) {
                const min = Math.min(
                    dp[i - 1][j] !== -1 ? dp[i - 1][j] : Infinity,
                    dp[i][j - 1] !== -1 ? dp[i][j - 1] : Infinity,
                );
                dp[i][j] = Math.max(min, grid[i][j]);
            }
        }
    }

    if (dp[n - 1][n - 1] !== -1) {
        diff = Math.min(diff, dp[n - 1][n - 1] - min);
    }
}

console.log(diff);
