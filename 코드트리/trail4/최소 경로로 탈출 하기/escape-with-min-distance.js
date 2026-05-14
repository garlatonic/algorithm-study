const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.
const result = bfs(0);
console.log(result === 0 ? -1 : result);

function bfs() {
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];
    const visited = Array.from({ length: n }, () => Array(m).fill(false));
    const step = Array.from({ length: n }, () => Array(m).fill(0));
    const queue = [[0, 0]];
    visited[0][0] = true;

    while (queue.length) {
        const [y, x] = queue.shift();

        for (let d = 0; d < 4; d++) {
            const nx = x + dx[d];
            const ny = y + dy[d];

            if (!inRange(ny, nx) || visited[ny][nx] || grid[ny][nx] === 0) continue;
            visited[ny][nx] = true;
            step[ny][nx] = step[y][x] + 1;
            queue.push([ny, nx]);
        }
    }

    return step[n - 1][m - 1];
}

function inRange(y, x) {
    return 0 <= y && y < n && 0 <= x && x < m;
}