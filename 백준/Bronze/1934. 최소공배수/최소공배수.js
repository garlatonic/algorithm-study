const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const T = +input[0];
const arr = input.slice(1).map((line) => {
  const [a, b] = line.trim().split(" ").map(Number);
  return { a, b };
});

for (const { a, b } of arr) {
  console.log(lcm(a, b));
}

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}
