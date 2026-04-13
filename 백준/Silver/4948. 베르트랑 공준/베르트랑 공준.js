const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const testCases = input.slice(0, -1).map(Number);

for (let i = 0; i < testCases.length; i++) {
  const n = testCases[i];
  const result = [];
  // n보다 크고 2n보다 작거나 같은 소수 찾기
  for (let j = n + 1; j <= 2 * n; j++) {
    if (isPrime(j)) {
      result.push(j);
    }
  }
  console.log(result.length);
}

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
