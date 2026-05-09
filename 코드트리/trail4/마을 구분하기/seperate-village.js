const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const grid = input.slice(1, n + 1).map((line) => line.split(" ").map(Number));

// Please Write your code here.
const visited = Array.from({ length: n }, () => Array(n).fill(false));
const peoples = [];

for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
        if (!visited[y][x] && grid[y][x] === 1) {
            const town = [];
            dfs(y, x, town);
            peoples.push(town.length);
        }
    }
}

peoples.sort((a, b) => a - b);
console.log(peoples.length);
console.log(peoples.join("\n"));

function dfs(y, x, town) {
    const dy = [1, -1, 0, 0];
    const dx = [0, 0, 1, -1];

    visited[y][x] = true;
    town.push([y, x]);

    for (let d = 0; d < 4; d++) {
        const ny = y + dy[d];
        const nx = x + dx[d];
        if (canGo(ny, nx)) {
            dfs(ny, nx, town);
        }
    }
}

function inRange(y, x) {
    return 0 <= y && y < n && 0 <= x && x < n;
}

function canGo(y, x) {
    if (!inRange(y, x) || visited[y][x] || grid[y][x] === 0) return false;
    return true;
}
