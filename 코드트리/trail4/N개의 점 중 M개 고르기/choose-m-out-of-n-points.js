const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const points = input
    .slice(1, Number(n) + 1)
    .map((line) => line.split(" ").map(Number));

// Please Write your code here.
let minDist = Infinity;
const p = [];

choosePoint(0, 0);
console.log(minDist);

function choosePoint(index, count) {
    if (count === m) {
        let maxDist = 0;
        for (let i = 0; i < m; i++) {
            for (let j = i + 1; j < m; j++) {
                const dist = (p[i][0] - p[j][0]) ** 2 + (p[i][1] - p[j][1]) ** 2;
                maxDist = Math.max(maxDist, dist);
            }
        }
        minDist = Math.min(minDist, maxDist);
        return;
    }

    for (let i = index; i < n; i++) {
        p.push(points[i]);
        choosePoint(i + 1, count + 1);
        p.pop();
    }
}
