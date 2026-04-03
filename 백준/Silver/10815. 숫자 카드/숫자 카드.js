const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const N = +input[0];
const cardNums = input[1].trim().split(" ").map(Number);
const M = +input[2];
const nums = input[3].trim().split(" ").map(Number);

const result = [];

const cardMap = new Set();
for (let i = 0; i < N; i++) {
  cardMap.add(cardNums[i]);
}
for (let i = 0; i < M; i++) {
  if (cardMap.has(nums[i])) result.push(1);
  else result.push(0);
}

console.log(result.join(" "));
