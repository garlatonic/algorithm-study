const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const a = input[1].split(" ").map(Number);

// Please Write your code here.
const arr = [];
let maxResult = 0;

choose(0, 0);
console.log(maxResult);

function choose(index, count) {
    if (count === m) {
        const result = xor(arr);
        maxResult = Math.max(maxResult, result);
        return;
    }

    for (let i = index; i < n; i++) {
        arr.push(a[i]);
        choose(i + 1, count + 1);
        arr.pop();
    }
}

function xor(arr) {
    let result = 0;

    for (const num of arr) {
        result ^= num;
    }

    return result;
}
