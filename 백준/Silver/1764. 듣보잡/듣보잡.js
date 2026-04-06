const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const v = input.slice(1, N + 1);
const h = input.slice(N + 1);

v.sort((a, b) => a.localeCompare(b));

const hSet = new Set(h);
const result = new Set();
for (let i = 0; i < N; i++) {
  const vp = v[i];
  if (hSet.has(vp)) result.add(vp);
}

console.log(result.size);
result.forEach((v) => console.log(v));
