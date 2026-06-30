const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].trim().split(' ').map(Number);

// Please Write your code here.
const frequency = new Map();
for(const num of arr) {
    frequency.set(num, (frequency.get(num) ?? 0) + 1);
}

const frequencyArr = [...frequency.entries()].sort((a, b) => b[1] - a[1] || b[0] - a[0]);
const result = [];

frequencyArr.forEach(([k, _]) => {
    result.push(k);
})

console.log(result.slice(0, k).join(" "));