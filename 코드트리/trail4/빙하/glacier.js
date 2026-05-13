const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const a = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please Write your code here.
const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const grid = structuredClone(a);
let glaciers = countGlacier(grid);
let last;
let time = 0;

while (glaciers > 0) {
    const glacier = [];
    bfs(glacier);
    melt(glacier);
    if(glaciers - glacier.length <= 0) {
        last = glaciers;
    }
    glaciers -= glacier.length;
    time += 1;
}

console.log(time, last);

function bfs(glacier) {
    const queue = [[0, 0]];
    const visited = Array.from({ length: n }, () => Array(m).fill(false));

    while (queue.length) {
        const [y, x] = queue.shift();

        for (let d = 0; d < 4; d++) {
            const ny = y + dy[d];
            const nx = x + dx[d];

            if (!inRange(ny, nx)) continue; // 범위를 벗어나면 컷
            if (visited[ny][nx]) continue; // 방문한 좌표라면 컷

            visited[ny][nx] = true;
            if (grid[ny][nx] === 0) {
                queue.push([ny, nx]);
            } else {
                glacier.push([ny, nx]);
            }
        }
    }
}

function melt(glacier) {
    for (const [y, x] of glacier) {
        grid[y][x] = 0;
    }
}

function inRange(y, x) {
    return 0 <= x && x < m && 0 <= y && y < n;
}

function countGlacier(grid) {
    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === 1) count += 1;
        }
    }

    return count;
}