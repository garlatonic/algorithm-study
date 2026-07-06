const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const words = input.slice(1, 1 + n);

// Please Write your code here.
const SortedMap = require("collections/sorted-map");
const sm = new SortedMap();

for(const word of words) {
    const value = sm.get(word) ?? 0;
    sm.set(word, value + 1);
}

const result = [];
for(const [k, v] of sm.entries()) {
    const percentage = (v / words.length * 100).toFixed(4);
    result.push(`${k} ${percentage}`);
}

console.log(result.join("\n"));