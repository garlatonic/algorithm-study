const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const grid = input.slice(1, 1 + n).map((line) => line.split(" ").map(Number));
const [r1, c1] = input[1 + n].split(" ").map(Number);
const [r2, c2] = input[2 + n].split(" ").map(Number);

// Please Write your code here.
const walls = [];
const visitedWall = Array.from({ length: n }, () => Array(n).fill(false));
let minTime = Infinity;

dfs(0);
console.log(minTime === Infinity ? -1 : minTime);

// k개의 벽 선택
function dfs(index) {
    if (index === k) {
        const time = bfs(walls);
        if (time !== 0) minTime = Math.min(minTime, time);
        return;
    }

    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            if (visitedWall[r][c]) continue;
            if (grid[r][c] === 0) continue;

            visitedWall[r][c] = true;
            walls.push([r, c]);
            dfs(index + 1);
            visitedWall[r][c] = false;
            walls.pop();
        }
    }
}

function bfs(walls) {
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];

    const visited = Array.from({ length: n }, () => Array(n).fill(false));
    const steps = Array.from({ length: n }, () => Array(n).fill(0));

    const area = structuredClone(grid);
    for (const [y, x] of walls) {
        area[y][x] = 0;
    }

    const queue = [[r1 - 1, c1 - 1]];
    visited[r1 - 1][c1 - 1] = true;

    while (queue.length) {
        const [r, c] = queue.shift();
        for (let d = 0; d < 4; d++) {
            const ny = r + dy[d];
            const nx = c + dx[d];

            if (!inRange(ny, nx) || visited[ny][nx] || area[ny][nx] === 1) continue;

            visited[ny][nx] = true;
            queue.push([ny, nx]);
            steps[ny][nx] = steps[r][c] + 1;
        }
    }

    return steps[r2 - 1][c2 - 1];
}

function inRange(y, x) {
    return 0 <= y && y < n && 0 <= x && x < n;
}
