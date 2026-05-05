const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const grid = input.slice(1, n + 1);

// Please Write your code here.
const coins = [];
let startX, startY, endX, endY;
for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
        if (grid[r][c] === ".") continue;
        else if (grid[r][c] === "S") {
            startX = r;
            startY = c;
        } else if (grid[r][c] === "E") {
            endX = r;
            endY = c;
        } else {
            coins.push({ number: parseInt(grid[r][c]), row: r, col: c });
        }
    }
}
coins.sort((a, b) => a.number - b.number);

const collected = [];
let minDist = Infinity;

collectCoins(0, 0, startX, startY);
console.log(minDist === Infinity ? -1 : minDist);

function collectCoins(index, dist, row, col) {
    if (collected.length >= 3) {
        const end = Math.abs(row - endX) + Math.abs(col - endY);
        minDist = Math.min(minDist, dist + end);
        return;
    }

    for (let i = index; i < coins.length; i++) {
        const coin = coins[i];
        const nextDist = Math.abs(row - coin.row) + Math.abs(col - coin.col);
        collected.push(coin);
        collectCoins(i + 1, dist + nextDist, coin.row, coin.col);
        collected.pop();
    }
}
