const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const str = input[0];

// Please Write your code here.
const strMap = new Map();
for(const char of str) {
    strMap.set(char, (strMap.get(char) ?? 0) + 1);
}

const entries = [...strMap.entries()].filter(([_, count]) => count === 1);
if(entries[0]) {
    console.log(entries[0][0]);
} else {
    console.log("None");
}