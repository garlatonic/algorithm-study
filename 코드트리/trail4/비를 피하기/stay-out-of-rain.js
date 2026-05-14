const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, h, m] = input[0].split(' ').map(Number);
const a = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please Write your code here.
const result = Array.from({ length: n }, () => Array(n).fill(0));
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (a[i][j] !== 2) continue;
        const steps = dfs(i, j);
        result[i][j] = steps;
    }
}

result.map(row => console.log(row.join(" ")));

function dfs(sy, sx) {
    const visited = Array.from({ length: n }, () => Array(n).fill(false));
    const step = Array.from({ length: n }, () => Array(n).fill(0));

    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];

    const queue = [[sy, sx]];
    visited[sy][sx] = true;

    let ex, ey;
    let escape = false;

    while (!escape && queue.length) {
        const [y, x] = queue.shift();

        for (let d = 0; d < 4; d++) {
            const ny = y + dy[d];
            const nx = x + dx[d];

            if (!canMove(ny, nx, visited)) continue;
            step[ny][nx] = step[y][x] + 1;
            visited[ny][nx] = true;
            queue.push([ny, nx]);
            if (a[ny][nx] === 3) {
                escape = true;
                [ex, ey] = [nx, ny];
                break;
            }
        }
    }

    if (escape) return step[ey][ex];
    return -1;
}

function canMove(y, x, visited) {
    if (!inRange(y, x)) return false;
    if (visited[y][x]) return false;
    if (a[y][x] === 1) return false;
    return true;
}

function inRange(y, x) {
    return 0 <= y && y < n && 0 <= x && x < n;
}