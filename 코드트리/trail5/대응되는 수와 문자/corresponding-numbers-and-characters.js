const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);
const words = input.slice(1, 1 + n);
const queries = input.slice(1 + n, 1 + n + m);
// Please Write your code here.

const hashmap = new Map();
for (let i = 0; i < n; i++) {
    hashmap.set(String(i + 1), words[i]);
    hashmap.set(words[i], i + 1);
}

for (const query of queries) {
    console.log(hashmap.get(query));
}