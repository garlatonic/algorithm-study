const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const words = input.slice(1, n + 1);
// Please Write your code here.

const wordsArr = words.map((word) => word.split("").sort((a, b) => a.localeCompare(b)).join(""));
const wordsMap = new Map();

for (const word of wordsArr) {
    if (wordsMap.has(word)) wordsMap.set(word, wordsMap.get(word) + 1);
    else wordsMap.set(word, 1);
}

let maxLength = 0;
for (const [v, k] of wordsMap) {
    maxLength = Math.max(maxLength, k);
}

console.log(maxLength)