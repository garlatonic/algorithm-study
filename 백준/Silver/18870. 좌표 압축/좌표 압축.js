const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const N = +input[0];
const arr = input[1].trim().split(" ").map(Number);

const sorted = [...new Set(arr)].sort((a, b) => a - b);
const map = new Map();
sorted.forEach((v, i) => map.set(v, i));

console.log(arr.map(v => map.get(v)).join(" "));