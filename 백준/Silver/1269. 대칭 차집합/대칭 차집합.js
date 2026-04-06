const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [a, b] = input[0].split(" ").map(Number);
const A = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const B = input[2]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const set = new Set(A);
for (const n of B) {
  if (set.has(n)) set.delete(n);
  else set.add(n);
}

console.log(set.size);
