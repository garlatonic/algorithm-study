const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const [r1, c1, r2, c2] = input[1].split(' ').map(v => Number(v) - 1);
const [sx, sy, ex, ey] = [c1, r1, c2, r2];

// Please Write your code here.
bfs();

function bfs() {
    const step = Array.from({ length: n }, () => Array(n).fill(0));
    const visited = Array.from({ length: n }, () => Array(n).fill(false));
    const dx = [-2, -2, -1, -1, 1, 1, 2, 2];
    const dy = [-1, 1, -2, 2, -2, 2, -1, 1];

    const queue = [[sy, sx]];
    visited[sy][sx] = true;

    while (queue.length) {
        const [y, x] = queue.shift();

        for (let d = 0; d < 8; d++) {
            const nx = x + dx[d];
            const ny = y + dy[d];

            if (!inRange(ny, nx) || visited[ny][nx]) continue;
            visited[ny][nx] = true;
            step[ny][nx] = step[y][x] + 1;
            queue.push([ny, nx]);
        }
    }

    if (sx === ex && sy === ey) console.log(0);
    else console.log(step[ey][ex] > 0 ? step[ey][ex] : -1);
}

function inRange(y, x) {
    return 0 <= y && y < n && 0 <= x && x < n;
}