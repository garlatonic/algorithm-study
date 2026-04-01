const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [N, k] = input[0].trim().split(" ").map(Number);
const x = input[1].trim().split(" ").map(Number);

x.sort((a, b) => b - a).splice(k);

console.log(x[k - 1]);
