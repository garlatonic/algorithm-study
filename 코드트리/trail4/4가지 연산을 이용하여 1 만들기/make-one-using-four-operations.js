const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let n = Number(input[0]);

// Please Write your code here.
const result = bfs();
console.log(result);

function bfs() {
    const visited = new Set();
    const queue = [[n, 0]];
    visited.add(n);

    while (queue.length) {
        const [cur, c] = queue.shift();

        if (cur === 1) return c;
        for (const next of [cur - 1, cur + 1, cur / 2, cur / 3]) {
            if (!Number.isInteger(next) || next < 1 || visited.has(next)) continue;
            visited.add(next);
            queue.push([next, c + 1]);
        }
    }

    return -1;
}