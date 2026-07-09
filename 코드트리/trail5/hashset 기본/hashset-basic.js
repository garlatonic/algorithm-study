const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const commands = input.slice(1, 1 + n).map(line => line.split(' '));

// Please Write your code here.
const hashSet = new Set();
for(const [c, x] of commands) {
    if(c === "add") {
        hashSet.add(x);
    } else if(c === "remove") {
        hashSet.delete(x);
    } else {
        console.log(hashSet.has(x));
    }
}