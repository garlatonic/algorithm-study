const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1, n + 1).map(row => row.split(" ").map(Number));

// Please write your code here.
const visited = Array.from({ length: n }, () => Array(n).fill(false));
const blocks = [];
let maxSize = -1;

for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
        const num = grid[y][x];

        if (!canGo(x, y, num)) continue;
        const block = [];
        dfs(x, y, block, num);
        maxSize = Math.max(maxSize, block.length);
        if (block.length >= 4) {
            blocks.push(block);
        }
    }
}

console.log(blocks.length, maxSize);

function dfs(x, y, block, num) {
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];

    visited[y][x] = true;
    block.push([x, y]);

    for (let d = 0; d < 4; d++) {
        const nx = x + dx[d];
        const ny = y + dy[d];

        if (!canGo(nx, ny, num)) continue;
        dfs(nx, ny, block, num);
    }
}
function inRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < n;
}
function canGo(x, y, num) {
    if (!inRange(x, y) || visited[y][x] || grid[y][x] !== num) return false;
    return true;
}