const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const N = +input[0];
const trees = input.slice(1).map(Number);

// 1. 가로수 사이의 간격을 구한다
const intervals = [];
for (let i = 1; i < N; i++) {
  intervals.push(trees[i] - trees[i - 1]);
}

// 2. 간격의 최대공약수를 구한다
let gcdValue = intervals[0];
intervals.forEach((interval) => {
  gcdValue = gcd(gcdValue, interval);
});

// 3. 최대공약수로 간격을 나눈 후 -1을 한다
let result = 0;
intervals.forEach((interval) => {
  result += interval / gcdValue - 1;
});
console.log(result);

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}
