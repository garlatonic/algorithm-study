const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const N = +input[0];
const arr = input.slice(1).map(Number);

console.log(arr.sort((a, b) => a - b).join("\n"));
