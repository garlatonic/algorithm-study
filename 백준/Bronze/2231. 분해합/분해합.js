const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let N = +input;

let minGen = 0;
for (let num = 1; num <= 1000000; num++) {
  const sum = sumOfDigits(num);
  
  if(sum !== N) continue;

  minGen = num;
  break;
}

// 각 자리수의 합
function sumOfDigits(num) {
  let sum = num;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}

console.log(minGen);