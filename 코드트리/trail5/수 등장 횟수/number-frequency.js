const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);
const queries = input[2].split(' ').map(Number);

// Please Write your code here.
const hashmap = new Map();
for (const num of arr) {
    hashmap.set(num, (hashmap.get(num) ?? 0) + 1);
}

const result = [];
for(const num of queries) {
    result.push(hashmap.get(num) ?? 0);
}

console.log(result.join(" "));