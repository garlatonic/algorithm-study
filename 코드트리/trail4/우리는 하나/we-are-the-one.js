const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k, u, d] = input[0].split(' ').map(Number);
const grid = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please Write your code here.
let maxCount = -1;
const visitedCity = Array.from({ length: n }, () => Array(n).fill(false));

visitCities([], 0);
console.log(maxCount);

function bfs(chosen) {
    const visited = Array.from({ length: n }, () => Array(n).fill(false));
    const queue = [...chosen];
    let count = 0;
    for (const [y, x] of chosen) {
        visited[y][x] = true;
        count++; // 선택한 k개 도시 모두 visited + count
    }

    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];
    while (queue.length) {
        const [y, x] = queue.shift();

        for (let d = 0; d < 4; d++) {
            const nx = x + dx[d];
            const ny = y + dy[d];

            if (!canGo(y, x, ny, nx, visited)) continue;
            visited[ny][nx] = true;
            queue.push([ny, nx]);
            count += 1;
        }
    }

    return count;
}

// k개의 도시를 적절하게 고르기
function visitCities(cities, count) {
    if (count === k) {
        const count = bfs(cities);
        maxCount = Math.max(count, maxCount);
        return;
    }

    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            if (visitedCity[r][c]) continue;

            cities.push([r, c]);
            visitedCity[r][c] = true;
            visitCities(cities, count + 1);
            visitedCity[r][c] = false;
            cities.pop();
        }
    }
}

function canGo(y, x, ny, nx, visited) {
    if (!inRange(ny, nx)) return false;
    if (visited[ny][nx]) return false;

    const diff = Math.abs(grid[y][x] - grid[ny][nx]);
    if (u <= diff && diff <= d) return true;
    else return false;
}

function inRange(y, x) {
    return 0 <= y && y < n && 0 <= x && x < n;
}