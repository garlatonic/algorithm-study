const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const points = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please Write your code here.
const pointHash = new Map();
for (const [x, y] of points) {
    if (!pointHash.has(x)) {
        pointHash.set(x, []);
    }

    pointHash.get(x).push(y);
}

let answer = 0;
pointHash.forEach((v) => {
    const smallest = v.sort((a, b) => a - b)[0];
    answer += smallest;
})

console.log(answer);