const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, n + 1).map(row => row.split(' ').map(Number));

// Please Write your code here.
const visited = Array.from({ length: n }, () => Array(m).fill(false));
let isExit = false;

dfs(0, 0);
console.log(isExit ? 1 : 0);

function dfs(y, x) {
    if (y === n - 1 && x === m - 1) {
        isExit = true;
        return;
    }

    const dy = [1, 0];
    const dx = [0, 1];

    visited[y][x] = true;

    for (let d = 0; d < 2; d++) {
        const ny = y + dy[d];
        const nx = x + dx[d];
        if (canGo(ny, nx)) dfs(ny, nx);
    }
}

function inRange(y, x) {
    return 0 <= y && y < n && 0 <= x && x < m;
}

function canGo(y, x) {
    if (!inRange(y, x)) return false;
    if (visited[y][x]) return false;
    if (grid[y][x] === 0) return false;

    return true;
}