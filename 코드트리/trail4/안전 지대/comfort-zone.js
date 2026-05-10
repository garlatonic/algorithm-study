const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const grid = input
    .slice(1, 1 + Number(n))
    .map((line) => line.split(" ").map(Number));

// Please Write your code here.
let MAX_K = 1;
grid.forEach((row) => {
    MAX_K = Math.max(MAX_K, ...row);
});

let maxTown = -1;
let maxK = 0;

for (let k = 1; k <= MAX_K; k++) {
    const visited = Array.from({ length: n }, () => Array(m).fill(false));
    const towns = [];
    for (let y = 0; y < n; y++) {
        for (let x = 0; x < m; x++) {
            if (!canGo(y, x, k, visited)) continue;
            const town = [];
            dfs(y, x, k, town, visited);
            towns.push(town);
        }
    }
    if (maxTown < towns.length) {
        maxTown = towns.length;
        maxK = k;
    }
}

console.log(maxK, maxTown);

function dfs(y, x, k, towns, visited) {
    const dy = [1, -1, 0, 0];
    const dx = [0, 0, 1, -1];

    visited[y][x] = true;
    towns.push([y, x]);

    for (let d = 0; d < 4; d++) {
        const ny = y + dy[d];
        const nx = x + dx[d];

        if (!canGo(ny, nx, k, visited)) continue;
        dfs(ny, nx, k, towns, visited);
    }
}

function inRange(y, x) {
    return 0 <= y && y < n && 0 <= x && x < m;
}

function canGo(y, x, k, visited) {
    if (!inRange(y, x) || visited[y][x] || grid[y][x] <= k) return false;
    return true;
}
