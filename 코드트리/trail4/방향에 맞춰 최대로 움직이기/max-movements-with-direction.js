const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const num = input.slice(1, 1 + n).map((line) => line.split(" ").map(Number));
const moveDir = input
    .slice(1 + n, 1 + 2 * n)
    .map((line) => line.split(" ").map(Number));
const [r, c] = input[1 + 2 * n]
    .split(" ")
    .map(Number)
    .map((x) => x - 1); // 0-indexed로 만들기

// Please Write your code here.
const dy = [0, -1, -1, 0, 1, 1, 1, 0, -1]; // 1-indexed
const dx = [0, 0, 1, 1, 1, 0, -1, -1, -1];

let count = 0;
let maxCount = 0;
function dfs(y, x, dir) {
    for (let i = 1; i <= n; i++) {
        // 이동할 수 있는 방향에서 현재 위치보다 큰 숫자가 있는 경우에 이동할 수 있음
        const ny = y + dy[dir] * i;
        const nx = x + dx[dir] * i;
        if (inRange(ny, nx) && num[y][x] < num[ny][nx]) {
            count += 1;
            maxCount = Math.max(maxCount, count);
            dfs(ny, nx, moveDir[ny][nx]);
            count -= 1;
        }
    }

    return;
}

dfs(r, c, moveDir[r][c]);
console.log(maxCount);

function inRange(y, x) {
    return y >= 0 && y < n && x >= 0 && x < n;
}