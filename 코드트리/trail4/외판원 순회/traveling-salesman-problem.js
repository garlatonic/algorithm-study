const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const cost = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.
const visited = Array(n).fill(false);

let minAmount = Infinity;
function moveCity(start, count, amount) {
    if (count === n - 1) {
        if (cost[start][0] !== 0) {
            const last = amount + cost[start][0];
            minAmount = Math.min(last, minAmount);
        }
        return;
    }

    for (let k = 1; k < n; k++) {
        if (cost[start][k] === 0 || visited[k]) continue;

        visited[k] = true;
        moveCity(k, count + 1, amount + cost[start][k]);
        visited[k] = false;
    }
}

moveCity(0, 0, 0);
console.log(minAmount);