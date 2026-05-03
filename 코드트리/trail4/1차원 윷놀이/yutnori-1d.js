const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m, k] = input[0].split(" ").map(Number);
const nums = input[1].split(" ").map(Number);

// Please Write your code here.
const pos = Array(k).fill(1);
let maxScore = 0;

function dfs(turn) {
    if (turn === n) {
        let score = 0;
        for (let i = 0; i < k; i++) {
            if (pos[i] >= m) score++;
        }
        maxScore = Math.max(maxScore, score);
        return;
    }

    for (let i = 0; i < k; i++) {
        if (pos[i] >= m) {
            dfs(turn + 1);
            continue;
        }

        pos[i] += nums[turn];
        dfs(turn + 1);
        pos[i] -= nums[turn];
    }
}

dfs(0);
console.log(maxScore);
