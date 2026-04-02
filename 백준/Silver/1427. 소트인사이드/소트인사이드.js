const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const N = input;
const arr = [...N].map(Number);

arr.sort((a, b) => b - a);
console.log(arr.join(""));
