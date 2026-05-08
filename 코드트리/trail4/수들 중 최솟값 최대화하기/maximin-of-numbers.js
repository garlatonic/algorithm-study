const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.
const visited = Array(n).fill(false);
let maxValue = 0;

function paintCell(row, minValue) {
    if (row === n) {
        maxValue = Math.max(minValue, maxValue);
        return;
    }

    for(let col = 0; col < n; col++) {
        if(visited[col]) continue;

        visited[col] = true;
        paintCell(row + 1, Math.min(minValue, grid[row][col]));
        visited[col] = false;
    }
}

paintCell(0, Infinity);
console.log(maxValue);