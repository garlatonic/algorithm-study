const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const A = input[1].split(' ').map(Number);
const B = input[2].split(' ').map(Number);
const C = input[3].split(' ').map(Number);
const D = input[4].split(' ').map(Number);

// Please Write your code here.
const ab = new Map();
const cd = new Map();

for (let i = 0; i < n; i++) {
    const a = A[i];
    const c = C[i];
    for (let j = 0; j < n; j++) {
        const b = B[j];
        const d = D[j];

        if (ab.has(a + b)) ab.set(a + b, ab.get(a + b) + 1);
        else ab.set(a + b, 1);

        if (cd.has(c + d)) cd.set(c + d, cd.get(c + d) + 1);
        else cd.set(c + d, 1);
    }
}

let answer = 0;
for (const [v, k] of ab) {
    const op = v * -1;
    if (cd.has(op)) answer += k * cd.get(op);
}

console.log(answer);