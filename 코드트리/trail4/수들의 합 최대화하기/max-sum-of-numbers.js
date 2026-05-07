const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const grid = input.slice(1, n + 1).map((line) => line.split(" ").map(Number));

// Please Write your code here.
const visited = Array.from({ length: n }, () => Array(n).fill(false));
let maxSum = 0;

function choose(row, sum) {
    if (row === n) {
        maxSum = Math.max(sum, maxSum);
        return;
    }

    for (let i = 0; i < n; i++) {
        if (visited.some((row) => row[i])) continue; // 열에 이미 선택된 칸이 있는 경우 건너뛰기

        visited[row][i] = true;
        choose(row + 1, sum + grid[row][i]);
        visited[row][i] = false;
    }
}

choose(0, 0);
console.log(maxSum);
