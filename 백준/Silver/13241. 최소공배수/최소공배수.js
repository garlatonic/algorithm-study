const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const [a, b] = input.split(" ").map(Number);

console.log(lcm(a, b));

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}
