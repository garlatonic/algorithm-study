const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const N = +input[0];
const pos = input.slice(1).map((line) => {
  const [x, y] = line.trim().split(" ").map(Number);
  return { x, y };
});

pos.sort((a, b) => {
  if (a.x !== b.x) return a.x - b.x;
  return a.y - b.y;
});

const result = pos.map((p) => `${p.x} ${p.y}`).join("\n");
console.log(result);