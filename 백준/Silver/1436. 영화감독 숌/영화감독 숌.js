const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const N = +input;
let num = 665;
let count = 0;

while (count < N) {
  num++;
  if (String(num).includes("666")) count++;
}

console.log(num);
