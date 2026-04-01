const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const N = input[0];
const arr = input.slice(1).map(Number);
arr.sort((a, b) => a - b).forEach((line) => console.log(line));
