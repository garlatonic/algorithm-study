const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

// Please Write your code here.
const dpUp = Array(n).fill(1);
const dpDown = Array(n).fill(1);

for (let i = 1; i < n; i++) {
  for (let j = 0; j < i; j++) {
    if (arr[i] > arr[j]) {
      dpUp[i] = Math.max(dpUp[i], dpUp[j] + 1);
    } else if (arr[i] < arr[j]) {
      dpDown[i] = Math.max(dpDown[i], dpUp[j] + 1, dpDown[j] + 1);
    }
  }
}

console.log(Math.max(...dpUp, ...dpDown));
