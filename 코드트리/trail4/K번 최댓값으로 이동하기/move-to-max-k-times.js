const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const grid = input.slice(1, n + 1).map((line) => line.split(" ").map(Number));
const startPoints = input
    .slice(n + 1)
    .map((line) => line.split(" ").map(Number));

// Please Write your code here.
let [y, x] = [startPoints[0][0] - 1, startPoints[0][1] - 1];

for (let i = 0; i < k; i++) {
    const currNum = grid[y][x];

    const visited = Array.from({ length: n }, () => Array(n).fill(false));
    const reachable = [];
    visited[y][x] = true;

    dfs(y, x, currNum, visited, reachable);

    if (reachable.length === 0) break;

    // reachable 배열에서 가장 큰 숫자
    const maxVal = Math.max(...reachable.map(([ry, rx]) => grid[ry][rx]));
    const candidates = reachable
        .filter(([ry, rx]) => grid[ry][rx] === maxVal) // 최대값과 같은 숫자 추리고
        .sort((a, b) => a[0] - b[0] || a[1] - b[1]); // 행 기준 오름차순, 같으면 열 기준 오름차순

    [y, x] = candidates[0]; // 가장 작은 행과 열을 가진 위치로 이동
}
console.log(y + 1, x + 1); // 최종 위치 출력 (1-based index)

function dfs(y, x, currNum, visited, reachable) {
    const dy = [0, 0, -1, 1];
    const dx = [-1, 1, 0, 0];

    for (let d = 0; d < 4; d++) {
        const ny = y + dy[d];
        const nx = x + dx[d];

        if (ny < 0 || ny >= n || nx < 0 || nx >= n) continue; // 범위 벗어나면 패스
        if (visited[ny][nx]) continue; // 이미 방문한 칸이면 패스
        if (grid[ny][nx] >= currNum) continue; // 현재값보다 크면 못 감

        visited[ny][nx] = true;
        reachable.push([ny, nx]); // 도달 가능한 칸 수집
        dfs(ny, nx, currNum, visited, reachable);
    }
}
