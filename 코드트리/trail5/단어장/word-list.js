const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const words = input.slice(1, n + 1);

// Please Write your code here.
const SortedMap = require("collections/sorted-map");
const sm = new SortedMap();

for (const word of words) {
    const count = sm.get(word) ?? 0;
    sm.set(word, count + 1);
}

const result = [];
[...sm.entries()].map((el) => result.push(el.join(" ")));

console.log(result.join("\n"));