const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input.slice(1, n + 1);

// Please Write your code here.
const words = new Map();
for (const word of arr) {
    words.set(word, (words.get(word) ?? 0) + 1);
}

let maxCount = 0;
for (let [_, count] of words) {
    maxCount = Math.max(count, maxCount);
}

console.log(maxCount);