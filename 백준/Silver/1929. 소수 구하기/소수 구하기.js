const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const [M, N] = input.split(" ").map(Number);

for (let i = M; i <= N; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
