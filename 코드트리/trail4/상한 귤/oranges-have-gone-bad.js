const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const grid = input.slice(1, 1 + n).map((line) => line.split(" ").map(Number));

// Please Write your code here.
const rotten = [];
findRotten();
bfs();
process.exit(0);

function findRotten() {
    for (let y = 0; y < n; y++) {
        for (let x = 0; x < n; x++) {
            if (grid[y][x] === 2) {
                rotten.push([y, x]);
            }
        }
    }
}

function bfs() {
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];

    const queue = [];
    rotten.map((pos) => queue.push(pos));
    const visited = Array.from({ length: n }, () => Array(n).fill(false));
    const time = Array.from({ length: n }, () => Array(n).fill(0));

    while (queue.length) {
        const [y, x] = queue.shift(0);
        for (let d = 0; d < 4; d++) {
            const ny = y + dy[d];
            const nx = x + dx[d];

            if (!inRange(ny, nx) || visited[ny][nx] || grid[ny][nx] !== 1) continue;
            visited[ny][nx] = true;
            queue.push([ny, nx]);
            time[ny][nx] = time[y][x] + 1;
        }
    }

    for (let y = 0; y < n; y++) {
        for (let x = 0; x < n; x++) {
            if (time[y][x] === 0 && grid[y][x] === 0) {
                time[y][x] = -1;
            } else if (time[y][x] === 0 && grid[y][x] === 1) {
                time[y][x] = -2;
            }
        }
    }

    time.map((row) => console.log(row.join(" ")));
    return;
}

function inRange(y, x) {
    return 0 <= y && y < n && 0 <= x && x < n;
}
