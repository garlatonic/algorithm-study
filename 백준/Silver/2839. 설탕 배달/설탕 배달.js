const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const N = +input;
let minCount = Infinity;

for (let i = 0; i <= Math.floor(N / 5); i++) {
  for (let j = 0; j <= Math.floor(N / 3); j++) {
    const sum = 5 * i + 3 * j;

    if (sum !== N) continue;
    minCount = Math.min(minCount, i + j);
  }
}

if (minCount === Infinity) console.log(-1);
else console.log(minCount);
