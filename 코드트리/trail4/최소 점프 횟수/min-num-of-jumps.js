const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const nums = input[1].split(" ").map(Number);

// Please write your code here.
const visited = Array(n).fill(false);
let minJump = Infinity;
visited[0] = true;

function dfs(index) {
    if (index >= n - 1) {
        const jump = visited.filter(Boolean).length - 1; // 시작점 제외
        minJump = Math.min(minJump, jump);
        return;
    }

    for (let i = 1; i <= nums[index]; i++) {
        const nextIndex = index + i;
        if (nextIndex < n && !visited[nextIndex]) {
            visited[nextIndex] = true;
            dfs(nextIndex);
            visited[nextIndex] = false;
        }
    }
}

dfs(0);
console.log(minJump === Infinity ? -1 : minJump);
