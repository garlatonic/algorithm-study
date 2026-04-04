const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const S = input.slice(1, 1 + N).map((x) => x.trim());
const C = input.slice(1 + N, 1 + N + M).map((x) => x.trim());

const setS = new Set(S);
const result = C.filter((x) => setS.has(x));
console.log(result.length);
