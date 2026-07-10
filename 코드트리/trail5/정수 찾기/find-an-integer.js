const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr1 = input[1].trim().split(' ').map(Number);
const m = Number(input[2]);
const arr2 = input[3].trim().split(' ').map(Number);

// Please Write your code here.
const set = new Set(arr1);
const result = [];
for (const el of arr2) {
    result.push(set.has(el) ? 1 : 0);
}

console.log(result.join("\n"));