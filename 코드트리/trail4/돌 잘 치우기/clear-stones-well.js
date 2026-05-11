const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [N, K, M] = input[0].split(' ').map(Number);
const grid = input.slice(1, 1 + N).map(line => line.split(' ').map(Number));
const startPoints = input.slice(1 + N, 1 + N + K).map(line => line.split(' ').map(Number));

// Please Write your code here.
const stones = Array.from({ length: N }, () => Array(N).fill(0));
const visited = Array.from({ length: N }, () => Array(N).fill(false));
const starts = startPoints.map(([r, c]) => [r - 1, c - 1]);
let maxCount = 0;
chooseStone(0);
console.log(maxCount);

function chooseStone(i) {
    if (i === M) {
        const count = bfs(stones);
        maxCount = Math.max(maxCount, count);
        return;
    }

    for (let r = 0; r < N; r++) {
        for (let c = 0; c < N; c++) {
            if (grid[r][c] === 0 || visited[r][c]) continue;

            stones[r][c] = 1;
            visited[r][c] = true;
            chooseStone(i + 1);
            visited[r][c] = false;
            stones[r][c] = 0;
        }
    }
}

function bfs(stones) {
    const v = Array.from({ length: N }, () => Array(N).fill(false));

    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];
    const queue = [];

    for (const [sr, sc] of starts) {
        if (!v[sr][sc]) {
            v[sr][sc] = true;
            queue.push([sr, sc]);
        }
    }

    let count = 0;
    while (queue.length) {
        const [cr, cc] = queue.shift();
        count += 1;

        for (let d = 0; d < 4; d++) {
            const nr = cr + dy[d];
            const nc = cc + dx[d];

            if (!inRange(nc, nr) || v[nr][nc]) continue;
            if (grid[nr][nc] === 1 && stones[nr][nc] === 0) continue;

            v[nr][nc] = true;
            queue.push([nr, nc]);
        }
    }

    return count;
}

function inRange(x, y) {
    return 0 <= x && x < N && 0 <= y && y < N;
}