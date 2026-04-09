const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n").map(Number);

const N = input[0];
const t = input.slice(1, N + 1);
for (let k = 0; k < N; k++) {
  let n = t[k];

  while (true) {
    if (isPrime(n)) {
      console.log(n);
      break;
    }
    n++;
  }
}

function isPrime(x) {
  if (x < 2) return false;
  const limit = Math.floor(Math.sqrt(x));
  for (let i = 2; i <= limit; i++) {
    if (x % i === 0) return false;
  }
  return true;
}
