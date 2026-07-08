const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);
// Please Write your code here.
const SortedMap = require("collections/sorted-map");
const sm = new SortedMap();

for (let i = 0; i < n; i++) {
    const num = arr[i];
    if (sm.has(num)) continue;
    sm.set(num, i + 1);
}

const result = [];
[...sm.entries()].map((el) => result.push(el.join(" ")));

console.log(result.join("\n"));