const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const A = input[0].split(" ").map(Number);
const B = input[1].split(" ").map(Number);

const denominator = lcm(A[1], B[1]);
const numeratorSum = (A[0] * denominator) / A[1] + (B[0] * denominator) / B[1];

const commonDivisor = gcd(numeratorSum, denominator);
console.log(`${numeratorSum / commonDivisor} ${denominator / commonDivisor}`);

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}
